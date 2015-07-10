class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def user_is_admin?
    @user_is_admin ||= current_user ? current_user.admin : false
  end

  def access_denied(msg)
    redirect_to root_path, alert: "Cannot Complete Action: #{msg}."
  end

  def current_user
    @current_user ||= User.find_by_auth_token(cookies[:auth_token]) if cookies[:auth_token]
  end

  def authenticate_user!
    if current_user == nil
      redirect_to login_path, alert: "You must be logged in to do that."
    end
  end

end
