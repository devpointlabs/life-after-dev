class Api::ProjectsController < ApplicationController
  
  def index
   
   
    render json: Project.limit(5).offset(params[:offset])
  end


  def show
    render json: Project.find(params[:id])
  end
end

