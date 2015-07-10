class CreatePlots < ActiveRecord::Migration
  def change
    create_table :plots do |t|
      t.integer :plot_number
      t.belongs_to :garden, index: true, foreign_key: true
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
