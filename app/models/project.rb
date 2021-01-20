class Project < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :requests
  
  def self.search(search) #class.search outside, pass params into ()
    if search.length >= 3
      Project.where('title ILIKE ?', "%#{search}%")
    end
  end
end
