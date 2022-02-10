Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root 'static#index'

  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get 'doctors', to: 'doctors#index'
    end
  end
end
