class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_url, notice: "Successfully logged in!"
    else
      render :back, alert: "Email or Password did not match"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Successfully logged out. Goodbye!"
  end

end
