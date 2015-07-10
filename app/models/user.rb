class User < ActiveRecord::Base
  has_secure_password
  belongs_to :garden
  has_many :plots
  before_create { generate_token(:auth_token) }
  before_create { generate_token(:confirm_token) }

  def full_name
    "#{self.first_name} #{self.last_name}"
  end

  def generate_token(column)
    begin
      self[column] = SecureRandom.urlsafe_base64
    end while User.exists?(column => self[column])
  end

  def send_password_reset
    generate_token(:password_reset_token)
    self.password_reset_sent_at = Time.zone.now
    save!
    UserMailer.password_reset(self).deliver_now
  end

  def email_activate
    self.email_confirmed = true
    self.confirm_token = nil
    save!(validate: false)
  end

end
