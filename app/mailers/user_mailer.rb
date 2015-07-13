class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.password_reset.subject
  #
  def password_reset(user)
    @user = user
    mail to: user.email, subject: "Password Reset"
  end

  def confirm_email(user)
    @user = user
    mail to: user.email, subject: "Confirm Email"
  end

  def reminder_email(user)
    @user = user
    mail to: user.email, subject: "Garden Reminder"
  end

end
