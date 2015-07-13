class UsersController < ApplicationController

  def new
    @user = User.new
    @all_gardens = Garden.all.map { |garden| [garden.name, garden.id] }
  end

  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.confirm_email(@user).deliver_now
      redirect_to login_path, notice: "Please confirm your email address to continue."
    else
      render :new, alert: "An Error Occured. Please Try Again."
    end
  end

  def destroy
    if user_is_admin?
      user = User.find(params[:user_id])
      user.destroy
      redirect_to "users/index", notice: "User deleted successfully."
    else
      access_denied("You are not an admin.")
    end
  end

  def index
    if user_is_admin?
      @all_users = @current_user.garden.users
    else
      access_denied("You are not an admin.")
    end
  end

  def edit
    @user = User.find(params[:id])
    if user_is_admin? || @user.id == current_user.id
      @all_gardens = Garden.all.map { |garden| [garden.name, garden.id] }
    else
      access_denied("You cannot edit other users' information unless you are an admin.")
    end
  end

  def update
      @user = User.find(params[:id])
      @user.update(user_params)
      redirect_to @user, notice: "Account Successfully Updated."
  end

  def show
    @user = current_user
  end

  def confirm_email
    user = User.find_by_confirm_token(params[:id])
    if user
      user.email_activate
      redirect_to login_path, notice: "Your email has been confirmed. Please log in to continue."
    else
      access_denied("User not found.")
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :garden_id)
  end

end
