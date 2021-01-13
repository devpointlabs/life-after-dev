class Api::UsersController < ApplicationController
  def index
    # render json: { user: User.all, project: Project.all, comment: Comment.all, request: Request.all }

    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def update
  end

  def destroy
  end
end
