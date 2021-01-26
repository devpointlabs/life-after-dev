class Api::Requests::RequestsController < ApplicationController

  def index
    render json: User.find(params[:user_id]).requests.where("contributor = true")
  end


end
