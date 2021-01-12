class Api::ProjectsController < ApplicationController
<<<<<<< HEAD
  before_action :set_user, only: [:show, :update, :create, :destroy]
  before_action :set_project, only: [:show, :update, :destroy]

  def index
    render json: Project.all
  end

  def show
    render json: @project
  end

  def new
  end

  def create
    project = @user.projects.new(project_params)
    if (project.save)
      render json: project
    else
      render json: project.errors, status: 422
    end
  end

  def update
    if (@project.update(project_params))
      render json: @project
    else
      render json: @project.errors, status: 422
    end
  end

  def destroy
    @project.destroy
    render json: @project
  end

  private

  def project_params
    params.require(:project).permit(:title, :picture, :github_link, :description, :live_link)
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_project
    @project = @user.projects.find(params[:id])
  end
end
=======
  before_action :set_project only: [:show, :update, :destroy]
  
  def show
    render json: Project.all
  end

 
>>>>>>> 0708d7a9a7b5d550b6eb305f0c29150d16da98b8
