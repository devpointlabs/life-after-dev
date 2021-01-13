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
    @project.requests.create()
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
end
