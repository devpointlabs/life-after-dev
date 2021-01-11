class Api::UsersController < ApplicationController
  def index
  render json: User.all
  render json: Project.all
  render json: Comment.all
  render json: Request.all
  end

  def show
  end

  def new
  end

  def create
  end

  def update
  end

  def destroy
  end
end
