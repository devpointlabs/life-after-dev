class Api::ProjectsController < ApplicationController
  def index
   
   
    render json: Project.limit(5).offset(params[:offset])
  end
<<<<<<< HEAD
=======

>>>>>>> b4925cb36b7277f20e7b8e6360f355c70ecfd11a

  def show
    render json: Project.find(params[:id])
  end
end
