class PlotPlant < ActiveRecord::Base
  belongs_to :plant
  belongs_to :plot
end
