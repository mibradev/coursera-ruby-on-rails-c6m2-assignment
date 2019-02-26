Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    resources :states, only: [:index, :show]
    resources :cities, except: [:new, :edit]
  end

  root 'home#index'
end
