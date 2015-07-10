class Plant < ActiveRecord::Base
  has_many :plot_plants
  has_many :plots, through: :plot_plants
end
