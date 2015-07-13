class GardensController < ApplicationController

  def index
    authenticate_user!
    if current_user
      @garden = current_user.garden
      @plots = @garden.plots
    end
  end

end
