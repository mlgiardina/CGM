class SessionsController < ApplicationController
  def create
    user = User.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      notice: "Successfully logged in!"
      redirect_to root_url
    else
      alert: "Email or Password did not match"
      render :back
    end
  end

  def destroy
    session[:user_id] = nil
    notice: "Successfully logged out. Goodbye!"
    redirect_to root_url
  end

end
