class Api::ProjectsController < ApplicationController
  before_action :set_project only: [:show, :update, :destroy]
  
  def show
    render json: Project.all
  end

 
