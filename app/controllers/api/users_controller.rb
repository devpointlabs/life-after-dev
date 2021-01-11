class Api::UsersController < ApplicationController
  def index
    render json: User.all
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
