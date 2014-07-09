Rails.application.routes.draw do

  resources :users
  resources :sessions, only: [:new, :create, :destroy]
  resources :templates
  resources :openings
  resources :resumes
  resources :managers
  resources :recruiters

 root "sessions#new"
  match '/signup',               to: 'users#new',                      via: 'get'
  match '/signin',               to: 'sessions#new',                   via: 'get'
  match '/signout',              to: 'sessions#destroy',               via: 'delete'
  match '/opening',              to: 'static_pages#openings',          via: 'get'  
  match '/viewresumes',          to: 'static_pages#viewresume',        via: 'get'
  #match '/recruiterviewresume',  to: 'openings#viewvideoresume',       via: 'get' 
  match '/managerviewresumes',   to: 'managers#managerviewresume',     via: 'get'
  match '/managerviewresumes',   to: 'managers#managerviewresume',     via: 'post'
 # match '/managerviewresumes',   to: 'managers#managerviewresume',     via: 'post'
  match '/manageroptions',       to: 'managers#manageroption',         via: 'get'
  match '/managerdecisions',     to: 'managers#managerdecision',       via: 'get'
  match '/recruiterviewresumes', to: 'recruiters#recruiterviewresume', via: 'get'
  match '/recruiterviewresumes', to: 'recruiters#recruiterviewresume', via: 'post'
  match '/recruiteroptions',     to: 'recruiters#recruiteroption',     via: 'get'
  match '/recruiterdecisions',   to: 'recruiters#recruiterdecision',   via: 'get'
  
# The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
