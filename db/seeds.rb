# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
projects = []

@u1 = User.create(email: "test1@test.com", password: "123456", firstname: "Andrew", lastname: "Sloan",
                 image: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610257165/photo-1576076873449-f9530e1c50f3_skjiss.jpg", github_link: "Andrew_github.com", personal_site: "Andrew_personalsite.com", linkedin_link: "Andrew_linkedin.com",
                 tag: "The four basic food groups are candy, candy canes, candy corn, and sugar.")

@u2 = User.create(email: "test2@test.com", password: "123456", firstname: "Taylor", lastname: "Collins",
                 image: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610657206/profile_pic_2_mffymy.jpg", github_link: "Taylor_github.com", personal_site: "Taylor_personalsite.com", linkedin_link: "Taylor_linkedin.com",
                 tag: "I've devoted my life to this website, it has everything I need!")

@u3 = User.create(email: "test3@test.com", password: "123456", firstname: "Ian", lastname: "Wilks",
                 image: "https://res.cloudinary.com/lifeafterdev/image/upload/v1611265030/pexels-photo-2406949_ctvkij.jpg", github_link: "Ian_github.com", personal_site: "Ian_personalsite.com", linkedin_link: "Ian_linkedin.com",
                 tag: "I'm proud of who Iam and no one can take that from me.")

@u4 = User.create(email: "test4@test.com", password: "123456", firstname: "Rachel", lastname: "Wadsworth",
                 image: "https://res.cloudinary.com/lifeafterdev/image/upload/v1611265028/pexels-photo-3763152_v8bqqz.jpg", github_link: "Rachel_github.com", personal_site: "Rachel_personalsite.com", linkedin_link: "Rachel_linkedin.com",
                 tag: "I love coding and writing Javascript so much")

@u5 = User.create(email: "test5@test.com", password: "123456", firstname: "James", lastname: "Yeates",
                 image: "https://res.cloudinary.com/lifeafterdev/image/upload/v1611265026/pexels-photo-1484796_tyuqzs.jpg", github_link: "James_github.com", personal_site: "James_personalsite.com", linkedin_link: "James_linkedin.com",
                 tag: "I should have let Andrew and Ian win a hackathon...at least one.")

@u6 = User.create(email: "test6@test.com", password: "123456", firstname: "Danny", lastname: "Leaver",
                 image: "https://res.cloudinary.com/lifeafterdev/image/upload/v1611265029/pexels-photo-4783536_tladfj.jpg", github_link: "Danny_github.com", personal_site: "Danny_personalsite.com", linkedin_link: "Danny_linkedin.com",
                 tag: "This is the coolest thing I have ever done")
puts "users created successfully"
10.times do
  projects.push(Project.create(title: Faker::ProgrammingLanguage.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610151677/markus-spiske-466ENaLuhLY-unsplash_jrcxan.jpg", github_link: "github.com", user_id: @u1.id, live_link: "livelink.com", description: Faker::Quote.most_interesting_man_in_the_world))
 
  projects.push(Project.create(title: Faker::ProgrammingLanguage.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610151671/kaleidico-26MJGnCM0Wc-unsplash_shxpgo.jpg", github_link: "github.com",user_id: @u2.id,
                                   live_link: "livelink.com", description: Faker::Quote.most_interesting_man_in_the_world))

  projects.push(Project.create(title: Faker::ProgrammingLanguage.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1611265549/pexels-photo-1462725_hubxfs.jpg", github_link: "github.com",user_id: @u3.id,
                                   live_link: "livelink.com", description: Faker::Quote.most_interesting_man_in_the_world))

  projects.push(Project.create(title: Faker::ProgrammingLanguage.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1611265601/play-stone-network-networked-interactive-163064_ir3ccz.jpg", github_link: "github.com", user_id: @u4.id,
                                   live_link: "livelink.com", description: Faker::Quote.most_interesting_man_in_the_world))

  projects.push(Project.create(title: Faker::ProgrammingLanguage.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1611265626/pexels-photo-1670977_bv7lwz.jpg", github_link: "github.com", user_id: @u5.id,
                                   live_link: "livelink.com", description: Faker::Quote.most_interesting_man_in_the_world))

  projects.push(Project.create(title: Faker::ProgrammingLanguage.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1611265657/pexels-photo-776092_hr8via.jpg", github_link: "github.com", user_id: @u6.id,
                                   live_link: "livelink.com", description: Faker::Quote.most_interesting_man_in_the_world))
  end

2.times do
  projects.each do |p|
    p.comments.create(body: Faker::Quotes::Shakespeare.hamlet_quote, user_id: p.user_id, project_id: p.id)
  end
end

4.times do
  projects.each do |p|
    def choose_other_user(p)
      choice = rand(1..6)

      if ( choice != p.user_id)
        p.requests.create(user_id: choice, project_id: p.id, contributor: Faker::Boolean.boolean  )
      else 
        choose_other_user(p)
      end
    end
    choose_other_user(p)
  end
end

puts "seeded baby"
