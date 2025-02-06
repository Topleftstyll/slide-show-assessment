Rails.application.routes.draw do
  resources :images, only: :index do
    post :create_visit
  end

  root "images#index"
end
