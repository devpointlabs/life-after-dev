class Api::ProjectsController < ApplicationController
  def index
    render json: Project.all
  end

  def show
    render json: Project.find(params[:id])
  end
end
