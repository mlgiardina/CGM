class GardensController < ApplicationController

  def index
    authenticate_user!
    @garden = current_user.garden if current_user
    @plots = @garden.plots
  end

end
