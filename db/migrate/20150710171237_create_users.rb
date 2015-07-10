class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.belongs_to :garden, index: true, foreign_key: true
      t.string :email
      t.string :first_name
      t.string :last_name

      t.timestamps null: false
    end
  end
end
