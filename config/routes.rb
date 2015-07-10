Rails.application.routes.draw do
 resources :users
 resources :plants
 resources :gardens
 resources :plots
 get "login" => "sessions#new", as: "login"
 post "login" => "sessions#create", as: "create_session"
 get "logout" => "sessions#destroy", as: "logout"

 root "plots#index"
 
end
