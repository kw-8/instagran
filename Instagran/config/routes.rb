Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :index]

    resources :posts, only: [:index, :create, :show, :edit, :destroy] do
      resources :comments, only: [:create, :destroy]
    end

    resources :pictures, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
