class Api::ProjectsController < ApplicationController
  def index
   
   
    render json: Project.limit(5).offset(params[:offset])
  end

  def all_projects
    render json: Project.all
    Project.search(params[:query])
    #get params like index above but with 'query'
  end


  def show
    render json: Project.find(params[:id])
  end
end
