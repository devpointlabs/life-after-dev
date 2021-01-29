class Request < ApplicationRecord
  belongs_to :user
  belongs_to :project
  

  def self.contributors(project_id) 
    select("project_id, user_id, contributor, email, firstname, lastname, image")
    .joins("inner join users u ON requests.user_id = u.id")
    .where("requests.project_id = ? and contributor = true", project_id)
  end
end
