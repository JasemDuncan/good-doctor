Rails.application.routes.draw do
  root to: 'pages#index'

  namespace :api do
    namespace :v1 do
      # doctors
      resources :doctors
      post 'delete_doctor', to: 'doctors#delete_doctor'
      
      # appointments
      get 'appointments/:user_id', to: 'appointments#index'
      resources :appointments, only: [:create, :destroy]

      # Auth
      post :login, to: 'auth#login'
      post :register, to: 'auth#register'
      post :logout, to: 'auth#logout'

      # places
      resources :locations
    end
  end
end
