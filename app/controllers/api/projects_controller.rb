class Api::ProjectsController < ApplicationController
  def show
    render json: Project.find(params[:id])
  end
end
