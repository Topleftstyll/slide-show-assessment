Rails.application.routes.draw do
  resources :images, only: :index

  root "images#index"
end
