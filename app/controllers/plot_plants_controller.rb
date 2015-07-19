class PlotPlantsController < ApplicationController

  def create
    @plot_plant = PlotPlant.new(plot_id: params[:plot_id],
                                   plant_id: params[:plant_id])
    if @plot_plant.save
      render json: { message: "Success" }
    else
      render json: { message: "Error" }
    end
  end


end
