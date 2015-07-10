class User < ActiveRecord::Base
  has_secure_password
  belongs_to :garden
  has_many :plots

  def self.full_name
    "#{first_name} #{last_name}"
  end

end
