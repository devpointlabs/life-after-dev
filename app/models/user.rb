# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :projects
  has_many :comments
  has_many :requests
  # has_many :projects, through: :requests
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User


def self.pending_requests(id) 
  select("r.id, r.project_id, r.user_id as origin_user, r.contributor, p.id as target_project, p.user_id")
  .from("requests as r, projects as p")
  .where("r.contributor = false and r.project_id=p.id")
  end
end