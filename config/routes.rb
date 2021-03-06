Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:create, :index, :show, :destroy, :update] do
      resources :images, only: [:create, :index]
      resources :reviews, only: [:create, :index, :update]
    end
    resources :reviews, only: [:destroy, :show]
  end
end
