Rails.application.routes.draw do
  mount_devise_token_auth_for "User", at: "api/auth"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users do
      resources :projects, module: :users
    end
    resources :projects do
      resources :comments
      resources :requests
    end
    get "/projects/:project_id/get_contributors", to: "requests#get_contributors"
    get "all_projects", to: "projects#all_projects"
    get "projects/:project_id/inactive", to: "requests#get_inactive_requests"
  end
end
