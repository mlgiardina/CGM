class Plot < ActiveRecord::Base
  belongs_to :garden
  belongs_to :user
end
