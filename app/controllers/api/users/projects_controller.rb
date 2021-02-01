class Api::Users::ProjectsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update, :update_picture]
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
    file = params[:file]
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        project.picture = cloud_image["secure_url"]

        if project.save
          render json: project
        else
          render json: { errors: project.errors }, status: :unprocessable_entity
        end
      rescue => e
        render json: { errors: e }, status: 422
        return
      end
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
    params.permit(:title, :github_link, :live_link, :description, :picture)
  end
end
