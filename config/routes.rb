Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :doctors
      
      resources :users do
        resources :appointments
      end

      resource :users, only: [:create]
      post "/login", to: "users#login"
      get "/auto_login", to: "users#auto_login"
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

end
