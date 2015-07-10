class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      if user.email_confirmed
        if params[:remember_me]
          cookies.permanent[:auth_token] = user.auth_token
        else
          cookies[:auth_token] = user.auth_token
        end
      else
        access_denied("Unconfirmed Email Address")
      end
      redirect_to root_url, notice: "Successfully logged in!"
    else
      render :back, alert: "Email or Password did not match"
    end
  end

  def destroy
    cookies.delete(:auth_token)
    redirect_to root_url, notice: "Successfully logged out. Goodbye!"
  end

end
