class PlotsController < ApplicationController

  def index
    authenticate_user!
    @plots = current_user.plots if current_user
  end

end
