class PlantsController < ApplicationController

  def new
    @plant = Plant.new
  end

  def create
    @plant = Plant.new(plant_params)
    if @plant.save
      redirect_to @plant, notice: "Plant Successfully Added."
    else
      render :back, alert: "An Error Occurred. Please Try Again."
    end
  end

  def index
    @plant = Plant.all
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def show
  end

end
