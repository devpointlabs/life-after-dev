class Api::RequestsController < ApplicationController
  before_action :set_project
  before_action :set_request, only: [:show, :destroy]

  def index
    render json: @project.requests
  end

  def show
    render json: @request
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
<<<<<<< HEAD

  def request_params
    params.require(:request).permit(:user_id, :project_id)
  end
end
=======
end
>>>>>>> b4925cb36b7277f20e7b8e6360f355c70ecfd11a
