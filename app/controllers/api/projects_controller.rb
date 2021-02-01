class Api::ProjectsController < ApplicationController
  def index
    render json: Project.limit(5).offset(params[:offset])
  end

  def all_projects
    render json: Project.search(params[:query])
  end

  def update_picture
    project = Project.find(params[:project_id])
    file = params[:file]

    if file
      begin
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        if project.update(picture: cloud_image["secure_url"])
          render json: { data: project }
        else
          render json: { error: "error uploading image" }, status: 422
        end

      rescue => e
        render json: { errors: e }, status: 422
      end
    end
  end

  def show
    render json: Project.find(params[:id])
  end

  private

  def project_params
    params.permit(:title, :github_link, :live_link, :description, :picture)
  end
end
