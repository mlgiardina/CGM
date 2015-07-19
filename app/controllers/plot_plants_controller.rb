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

  def destroy
    @plot_plant = PlotPlant.find(params[:id])
    if @plot_plant.delete
      redirect_to :back, notice: "Plant removed from this plot."
    else
      redirect_to :back, alert: "An error occurred. Please try again."
    end
  end


end
