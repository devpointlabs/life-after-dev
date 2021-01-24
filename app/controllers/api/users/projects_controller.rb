class Api::Users::ProjectsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update]
  before_action :set_project, only: [:show, :update, :destroy, :get_project_ids]
  before_action :set_user

  def index
    render json: @user.projects
    # render json: @project.users.where("requests.contributor = true")
  end

  def show
    render json: @project
  end

  def new
    render json: Project.new
  end


  def create
    project = current_user.projects.new(project_params)
    if project.save
      render json: project
    else
      render json: { errors: project.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @project.update(project_params)
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

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.permit(:title, :picture, :github_link, :live_link, :description, :user_id)
  end
end
