class Api::UsersController < ApplicationController
  before_action :authenticate_user!, only: [:update, :update_picture]
  
  def index
    # render json: { user: User.all, project: Project.all, comment: Comment.all, request: Request.all }

    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def pending_requests
    render json: User.pending_requests(params[:id])
  end

  def pending_with_names
    render json: User.pending_with_names(params[:id])
  end


  def update_picture
    file = params[:file]
    # user = current_user
    if file
      begin
        # cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        # if current_user.update(image: cloud_image["secure_url"]) #try other way here
        #   render json: { data: current_user }
        # else
        #   render json: { error: "error uploading image" }, status: 422
        # end
        # (image: cloud_image["secure_url"])
<<<<<<< HEAD
        
=======
>>>>>>> 62992caf98e0d093d8949483d2ff1e676f16613f
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        current_user.image = cloud_image['secure_url']
        if current_user.save
          render(json: current_user)
        else
          render(json: { errors: current_user.errors.messages }, status: 422)
        end
      rescue => e
        render json: { errors: e }, status: 422
        return
      end
    end
  end


  def destroy
  end
end

private

def user_params
  params.require(:user).permit(:firstname, :lastname, :email, :image, :github_link, :personal_site, :linkedin_link, :tag)
end