class Api::ProjectsController < ApplicationController
  
  def index
    render json: Project.all
  end
end

  def show
    render json: Project.find(params[:id])
  end
end

