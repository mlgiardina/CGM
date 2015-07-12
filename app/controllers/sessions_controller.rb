class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user.email_confirmed
      if user && user.authenticate(params[:password])
        if params[:remember_me]
          cookies.permanent[:auth_token] = user.auth_token
        else
          cookies[:auth_token] = user.auth_token
        end
        redirect_to root_url, notice: "Successfully logged in!"
      else
        redirect_to login_path, alert: "Email or Password did not match."
      end
    else
      redirect_to login_path, alert: "You must confirm your email address."
    end
  end

  def destroy
    cookies.delete(:auth_token)
    redirect_to login_path, notice: "Successfully logged out. Goodbye!"
  end

end
