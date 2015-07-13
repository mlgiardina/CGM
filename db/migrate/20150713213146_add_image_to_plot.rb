class AddImageToPlot < ActiveRecord::Migration
  def change
    add_column(:plots, :image, :string)
  end
end
