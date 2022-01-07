Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index, :update, :destroy]

    resources :posts, only: [:index, :create, :show, :update, :destroy] do
      resources :comments, only: [:create, :index, :destroy]
    end

    resources :likes, only: [:create, :index, :destroy]
    resources :follows, only: [:create, :index, :destroy]
  end
end
