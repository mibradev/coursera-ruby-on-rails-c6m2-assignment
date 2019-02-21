Rails.application.routes.draw do
  resources :states, except: [:new, :edit]
  scope :api, defaults: { format: :json } do
    resources :states, except: [:new, :edit]
    resources :cities, except: [:new, :edit]
  end

  root 'home#index'
end
