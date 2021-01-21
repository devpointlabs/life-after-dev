class Api::UsersController < ApplicationController
  before_action :authenticate_user!, only: [:update]
  
  def index
    # render json: { user: User.all, project: Project.all, comment: Comment.all, request: Request.all }

    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render @user
    else
      render @user
    end
  end


  def destroy
  end
end

private

def user_params
  params.require(:user).permit(:firstname, :lastname, :email, :image, :github_link, :personal_site, :linkedin_link, :tag)
end