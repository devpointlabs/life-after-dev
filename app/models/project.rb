class Project < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :requests, dependent: :destroy
  # has_many :users, through: :requests

  
  def self.search(search) #class.search outside, pass params into ()
    if search.length >= 3
      Project.where('title ILIKE ?', "%#{search}%")
        .or(Project.where('description ILIKE ?', "%#{search}%"))
    end
  end
end
