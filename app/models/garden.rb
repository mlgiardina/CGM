class Garden < ActiveRecord::Base
  has_many :plots
  has_many :plants, through: :plots
  has_many :users
end
