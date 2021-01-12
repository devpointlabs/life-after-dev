class Api::RequestsController < ApplicationController
  
  
  def index
    render json: @requests.user
    render json: @requests.project
  end

  def show
    render json: @request.as_json(inclue: {project:{
      include: :user
    }}), status :ok
  end

  def new
  end

  def create
    @requests = @requests.users.create(params.require(:request).permit(:user_id, :project_id))
  end

  def update
    request = Request.new(project_params)
    if request.save
      render json: request
    else 
      render json: { errors: request.errors}, status: :unprocessable
  end

  def destroy
  end

  private

  def set_request
    @user =User.find

    def set_project
      @project = @project.requests.find
end

def 
