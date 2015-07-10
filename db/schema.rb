# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150710172231) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "gardens", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "plants", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "plot_plants", force: :cascade do |t|
    t.integer  "plant_id"
    t.integer  "plot_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "plot_plants", ["plant_id"], name: "index_plot_plants_on_plant_id", using: :btree
  add_index "plot_plants", ["plot_id"], name: "index_plot_plants_on_plot_id", using: :btree

  create_table "plots", force: :cascade do |t|
    t.integer  "plot_number"
    t.integer  "garden_id"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "plots", ["garden_id"], name: "index_plots_on_garden_id", using: :btree
  add_index "plots", ["user_id"], name: "index_plots_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.integer  "garden_id"
    t.string   "email"
    t.string   "first_name"
    t.string   "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "users", ["garden_id"], name: "index_users_on_garden_id", using: :btree

  add_foreign_key "plot_plants", "plants"
  add_foreign_key "plot_plants", "plots"
  add_foreign_key "plots", "gardens"
  add_foreign_key "plots", "users"
  add_foreign_key "users", "gardens"
end
