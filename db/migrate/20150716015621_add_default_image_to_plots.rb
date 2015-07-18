class AddDefaultImageToPlots < ActiveRecord::Migration
  def change
    change_column(:plots, :image, :string, default: "http://res.cloudinary.com/dnnsd9n2k/image/upload/c_fill,h_200,w_200/v1437002103/sample.jpg")
  end
end
