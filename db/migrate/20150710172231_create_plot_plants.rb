class CreatePlotPlants < ActiveRecord::Migration
  def change
    create_table :plot_plants do |t|
      t.belongs_to :plant, index: true, foreign_key: true
      t.belongs_to :plot, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
