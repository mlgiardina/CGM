class AddDefaultImageToPlots < ActiveRecord::Migration
  def change
    change_column(:plots, :image, :string, default: "http://res.cloudinary.com/dnnsd9n2k/image/upload/c_fill,h_150,w_150/v1437002103/sample.jpg")
  end
end
