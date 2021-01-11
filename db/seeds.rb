# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

# User.create(email: "test@test.com", firstname: "Cottonheaded", lastname: "Ninnymuggins",
# image: "this is an image", github_link: "githublink.com", personal_site: "personalsite.com", linkedin_link: "linkedin.com",
# tag: "this is my project. You like?")


Project.create(title: "Project Title", picture: "This is a project picture", github_link: "projectgithublink.com", 
 description: "I love my project SO much", live_link: "this is my live link",  user_id: 1)

Comment.create(body: "this is a comment", user_id: 1, project_id: 1)

Request.create(user_id: 1, project_id: 1)

 puts "seeded baby"
