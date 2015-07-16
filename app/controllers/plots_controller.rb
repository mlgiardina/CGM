class PlotsController < ApplicationController

  def new
    if user_is_admin?
      @plot = Plot.new
    else
      access_denied("Only admins may create new plots.")
    end
  end

  def create
    plot = Plot.new(plot_params)
    if plot.save
      render "plots#index", notice: "Plot Successfully Created."
    else
      render :back, alert: "An Error Occurred. Please Try Again."
    end
  end

  def edit
    if user_is_admin? || current_user.id == Plot.find(params[:id]).user.id
      @plot = Plot.find(params[:id])
    else
      access_denied("Only admins or owners of this plot may edit the plot.")
    end
  end

  def update
    @plot = Plot.find(params[:id])
    if params[:image].present?
      image = params[:image].to_hash.values.first
      binding.pry
      preloaded = Cloudinary::PreloadedFile.new(image)
      raise "Invalid upload signature" if !preloaded.valid?
      @plot.image = "http://res.cloudinary.com/dnnsd9n2k/image/upload/c_fill,h_150,w_150/" + preloaded.identifier
      @plot.save!
      redirect_to root_path, notice: "Plot Successfully Updated."
    end
  end

  def destroy
    if user_is_admin?
      @plot = Plot.find(params[:id])
      if @plot.delete
        redirect_to "root_path", notice: "Plot Successfuly Deleted."
      else
        render :back, alert: "An Error Occurred. Please Try Again."
      end
    else
      access_denied("Only admins may delete plots.")
    end
  end

  def show
    if user_is_admin? || current_user.id == Plot.find(params[:id]).user.id
      @plot = Plot.find(params[:id])
      redirect_to @plot
    else
      access_denied("Only admins or owners of this plot may view this plot.")
    end
  end

  def index
    @plots = current_user.plots
  end

  def add_plant
    authenticate_user!
    @new_plant = PlotPlant.new
  end

  private

  def plot_params
    params.require(:plot).permit(:plot_number, :garden_id, :user_id, :image)
  end

end
