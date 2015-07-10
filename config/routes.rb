Rails.application.routes.draw do

 resources :users do
   member do
     get :confirm_email
   end
 end
 
 resources :plants
 resources :gardens
 resources :plots
 resources :password_resets
 get "login" => "sessions#new", as: "login"
 post "login" => "sessions#create", as: "create_session"
 get "logout" => "sessions#destroy", as: "logout"

 root "plots#index"

end
