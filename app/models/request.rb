class Request < ApplicationRecord
  belongs_to :user
  belongs_to :project
  # has_many :projects, through: :users
  # has_many :users
end
