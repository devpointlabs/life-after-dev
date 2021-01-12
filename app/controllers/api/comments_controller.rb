class Api::CommentsController < ApplicationController
  before_action :set_project
  before_action :set_comment, only: [:show, :update, :destroy]

  def index
<<<<<<< HEAD
    render json: @project.comments.all
=======

>>>>>>> 0708d7a9a7b5d550b6eb305f0c29150d16da98b8
  end

  def show
    render json: @comment
  end

  def new
  end

  def create
    comment = @project.comments.new(comment_params)
    if (comment.save)
      render json: comment
    else
      render json: comment.errors, status: 422
    end
  end

  def update
    if (@comment.update(comment_params))
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    @comment.destroy
    render json: @comment
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

  def set_project
    @project = Project.find(params[:project_id])
  end

  def set_comment
    @comment = @project.comments.find(params[:id])
  end
end
