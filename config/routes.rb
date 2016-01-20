Rails.application.routes.draw do
  root "tasks#index"

  resources :users
  namespace :api do
    namespace :v1 do
      resources :tasks, only: [:index, :create, :update, :destroy], defaults: { format: :json }
      resources :task_lists, only: [:index, :create, :update, :destroy], defaults: { format: :json }
    end
  end

  get "/login", to: "sessions#new"
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
