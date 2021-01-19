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
                 image: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610657206/profile_pic_2_mffymy.jpg", github_link: "github.com", personal_site: "personalsite.com", linkedin_link: "linkedin.com",
                 tag: "I've devoted my life to this website, it has everything I need!")

5.times do
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

require "faker"
groups = []

u1 = User.create(email: "test@test.com", password: "123456", name: Faker::FunnyName.four_word_name)
                
u2 = User.create(email: "test2@test.com", password: "123456", name: Faker::FunnyName.four_word_name)
                 
u3 = User.create(email: "test3@test.com", password: "123456", name: Faker::FunnyName.four_word_name)
                 

20.times do
  groups.push(u1.groups.create(title:Faker::University.suffix, description:Faker::TvShows::Friends.quote))
                                   
  groups.push(u2.groups.create(title:Faker::University.suffix, description:Faker::TvShows::Friends.quote))

  groups.push(u3.groups.create(title:Faker::University.suffix, description:Faker::TvShows::Friends.quote)) 
end


5.times do 
  groups.each do |c|
    c.channels.create(subject:Faker::Games::SuperMario.location  public:true description:Faker::TvShows::DumbAndDumber.quote)

  end

3.times do
  channels.each do |i|
    i.comments.create(body:Faker::TvShows::MichaelScott.quote points:Faker::Number.within(range: 1..100) photo:"this is a photo" )
  end
end

puts "seeded"
