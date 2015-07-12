class PasswordResetsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    user.send_password_reset if user
    redirect_to root_url, notice: "Email sent with instructions on how to reset your password."
  end

  def edit
    @user = User.find_by_password_reset_token!(params[:id])
  end

  def update
    @user = User.find_by_password_reset_token!(params[:id])
    if @user.password_reset_sent_at < 5.hours.ago
      redirect_to new_password_reset_path, alert: "Password reset token has expired."
    elsif @user.update(user_params)
      redirect_to root_url, notice: "Password has been reset!"
    else
      render :edit, alert: "An error occurred. Please try again."
    end
  end

  private

  def user_params
    params.require(:user).permit(:password, :password_confirmation)
  end

end
