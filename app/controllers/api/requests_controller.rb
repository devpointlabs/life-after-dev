class Api::RequestsController < ApplicationController
  before_action :set_project
  before_action :set_request, only: [:show, :destroy, :update]

  def index
    render json: @project.requests
  end

  def get_inactive_requests
    render json: @project.requests.where("requests.contributor = false")
  end

  def show
    render json: @request
  end

  def get_contributors
    # render json: @project.users.where("requests.contributor = true")
    render json: Request.contributors(params[:project_id])
  end
  
  def new
  end

  def create
    request = Request.new(request_params)
    if request.save
      render json: request
    else
      render json: { errors: request.errors }, status: :unprocessable_entity
    end
  end

  def update
    if (@request.update(request_params))
      render json: @request
    else
      render json: @request.errors, status: 422
    end
  end

  def destroy
    @request.destroy
    render json: @request
  end

  private

  def set_project
  
    @project = Project.find(params[:project_id])
  end

  def set_request
    @request = @project.requests.find(params[:id])
  end

  def request_params
    params.require(:request).permit(:user_id, :project_id, :contributor)
  end
end
