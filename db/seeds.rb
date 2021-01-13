# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

projects = []

u1 = User.create(email: "test@test.com", password: "123456", firstname: "Cottonheaded", lastname: "Ninnymuggins",
                 image: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610257165/photo-1576076873449-f9530e1c50f3_skjiss.jpg", github_link: "github.com", personal_site: "personalsite.com", linkedin_link: "linkedin.com",
                 tag: "The four basic food groups are candy, candy canes, candy corn, and sugar.")

u2 = User.create(email: "tester@test.com", password: "123456", firstname: "LifeAfterDev", lastname: "Lover",
                 image: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610256956/photo-1608284465265-c2424b346179_mvpzjf.jpg", github_link: "github.com", personal_site: "personalsite.com", linkedin_link: "linkedin.com",
                 tag: "I've devoted my life to this website, it has everything I need!")

20.times do
  projects.push(u1.projects.create(title: Faker::Creature::Animal.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610151677/markus-spiske-466ENaLuhLY-unsplash_jrcxan.jpg", github_link: "github.com",
                                   live_link: "livelink.com", description: Faker::Quote.most_interesting_man_in_the_world))
  projects.push(u2.projects.create(title: Faker::Creature::Animal.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610151677/markus-spiske-466ENaLuhLY-unsplash_jrcxan.jpg", github_link: "github.com",
                                   live_link: "livelink.com", description: Faker::Quote.most_interesting_man_in_the_world))
end

3.times do
  projects.each do |p|
    p.comments.create(body: Faker::Quotes::Shakespeare.hamlet_quote, user_id: p.user_id, project_id: p.id)
  end
end

puts "seeded baby"
