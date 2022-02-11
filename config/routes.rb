Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'

  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get 'doctors', to: 'doctors#index'
    end
  end

end
