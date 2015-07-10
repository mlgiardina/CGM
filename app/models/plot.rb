class Plot < ActiveRecord::Base
  belongs_to :garden
  belongs_to :user
  has_many :plot_plants
  has_many :plants, through: :plot_plants
end
