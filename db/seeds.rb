# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

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
                 tag: "I'm proud of who I am and no one can take that from me.")

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
  projects.push(Project.create(title: Faker::ProgrammingLanguage.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610151677/markus-spiske-466ENaLuhLY-unsplash_jrcxan.jpg", github_link: "http://github.com", user_id: @u1.id, live_link: "http://google.com", description: Faker::Quote.most_interesting_man_in_the_world))
 
  projects.push(Project.create(title: Faker::ProgrammingLanguage.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610151671/kaleidico-26MJGnCM0Wc-unsplash_shxpgo.jpg", github_link: "http://github.com",user_id: @u2.id,
                                   live_link: "http://google.com", description: Faker::Quote.most_interesting_man_in_the_world))

  projects.push(Project.create(title: Faker::ProgrammingLanguage.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1611265549/pexels-photo-1462725_hubxfs.jpg", github_link: "http://github.com",user_id: @u3.id,
                                   live_link: "http://google.com", description: Faker::Quote.most_interesting_man_in_the_world))

  projects.push(Project.create(title: Faker::ProgrammingLanguage.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1611265601/play-stone-network-networked-interactive-163064_ir3ccz.jpg", github_link: "http://github.com", user_id: @u4.id,
                                   live_link: "http://google.com", description: Faker::Quote.most_interesting_man_in_the_world))

  projects.push(Project.create(title: Faker::ProgrammingLanguage.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1611265626/pexels-photo-1670977_bv7lwz.jpg", github_link: "http://github.com", user_id: @u5.id,
                                   live_link: "http://google.com", description: Faker::Quote.most_interesting_man_in_the_world))

  projects.push(Project.create(title: Faker::ProgrammingLanguage.name, picture: "https://res.cloudinary.com/lifeafterdev/image/upload/v1611265657/pexels-photo-776092_hr8via.jpg", github_link: "http://github.com", user_id: @u6.id,
                                   live_link: "http://google.com", description: Faker::Quote.most_interesting_man_in_the_world))
  end

2.times do
  projects.each do |p|
    p.comments.create(body: Faker::Quotes::Shakespeare.hamlet_quote, user_id: p.user_id, project_id: p.id)
  end
end




projects.each do |p|
  users = [1,2,3,4,5,6]
  4.times do 
    #make arr1 with [1,2,3,4,5,6]
    #first remove user_id from array
    #arr1.sample -> create request with user_id = arr1.sample
    #remove that ^^ from arr1

    puts users
    
    users.delete(p.user_id)
    requester = users.sample

    p.requests.create(user_id: requester, project_id: p.id, contributor: Faker::Boolean.boolean )

    users.delete(requester)

    # def choose_other_user(p)
    #   choice = rand(1..6)
    #   if ( choice != p.user_id)
    #     p.requests.create(user_id: choice, project_id: p.id, contributor: Faker::Boolean.boolean  )
    #   else 
    #     choose_other_user(p)
    #   end
    # end
    # choose_other_user(p)
  end
end

puts "seeded baby"




#### SEED DATA FOR TROUBLESHOOTING BELOW ####

# @u1 = User.create(email: "test1@test.com", password: "123456", firstname: "Andrew", lastname: "Sloan",
#                  image: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610257165/photo-1576076873449-f9530e1c50f3_skjiss.jpg", github_link: "Andrew_github.com", personal_site: "Andrew_personalsite.com", linkedin_link: "Andrew_linkedin.com",
#                  tag: "The four basic food groups are candy, candy canes, candy corn, and sugar.")

# @u2 = User.create(email: "test2@test.com", password: "123456", firstname: "Taylor", lastname: "Collins",
#                  image: "https://res.cloudinary.com/lifeafterdev/image/upload/v1610657206/profile_pic_2_mffymy.jpg", github_link: "Taylor_github.com", personal_site: "Taylor_personalsite.com", linkedin_link: "Taylor_linkedin.com",
#                  tag: "I've devoted my life to this website, it has everything I need!")

                
# Project.create(title:"Project 1", user_id: 2)
# Project.create(title:"Project 2", user_id: 2)
# Project.create(title:"Project 3", user_id: 2)
# Project.create(title:"Project 4", user_id: 2)

# Request.create(project_id: 1, user_id: 1, contributor: false)
# Request.create(project_id: 2, user_id: 1, contributor: true)
# Request.create(project_id: 3, user_id: 1, contributor: true)


# project_data = [
#   {:title => ["Chess Game", 
#       "TwoSidedNews", 
#       "Productify", 
#       "Skill Swap", 
#       "Trend Tracker", 
#       "Covid Stats", 
#       "GradePuppet", 
#       "WikiMe", 
#       "YouSpeak", 
#       "Among Us Sus Tracker", 
#       "Super To Do List", 
#       "Video Game Review Aggregator", 
#       "Charity Giver", 
#       "Vacation Rentals", 
#       "Pong Ultimate", 
#       "AlphaPoll", 
#       "Help Me Help You", 
#       "Zombie Alertz", 
#       "Ruby Casino", 
#       "Project E-Manager", 
#       "NuTrack", 
#       "Big Ol Stonks", 
#       "PhotoSpree", 
#       "GymBattles"], 
#     :picture => ["https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/chess_bibu3r.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/news_qhmvzi.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/news_qhmvzi.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327886/project%20photos/skills_inljkr.png",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327886/project%20photos/trends_vi4tb3.png",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/covid_lrzstj.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/grades_okkhsd.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327886/project%20photos/wiki_mx9tnb.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327888/project%20photos/youspeak_lm6l6k.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/amongus_gieht3.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327886/project%20photos/skills_inljkr.png",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327888/project%20photos/videogame_yyrqky.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/charity_ed2jco.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327886/project%20photos/vacation_i84h8y.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327886/project%20photos/pong_c1yqo2.png",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/poll_fzevpk.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/help_jfzstd.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327888/project%20photos/zombie_hkb2yk.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/casino_qpbtxn.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327886/project%20photos/project_mexqxl.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/nutrack_ndsa2b.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327889/project%20photos/stonks_kaxqdi.png",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/camera_wkoayk.jpg",
#       "https://res.cloudinary.com/lifeafterdev/image/upload/v1612327885/project%20photos/gym_nlq4nk.jpg"], 
#     :description => ["This is a React and Rails app that utilizes a third-party drag and drop library to play chess. It is still in progress, but most piece movements are programmed. I'd love some help to finish this!",
#       "We're creating a site that utilizes several scrapers to gather articles and bits of news related to both sides of an issue. Users can input various issues they are interested in and recieve articles showing multiple viewpoints. Using Node, Vue, and some third-party APIs.",
#       "This is the ultimate to-do app. Working towards making it feature complete by mid-year and launching by year's end. Using React, PHP, Bootstrap.",
#       "Skill Swap is a project born out of DevPoint Labs. Think of it as Tinder for people looking to trade various skills, inlcuding teaching a foreign language, construction/contractor work, coding, artistic skills, etc. Hoping this takes off soon!",
#       "This is a simple app that tracks various trends on topics gathered through web scraping and various 3rd party APIs. We need some more help on the frontend if anyone would like to contribute. Specifically React and Javascript.",
#       "This is a fully formed version of a COVID tracker built out as an assignment for DPL. Would love to get some help on this! Could still use some UI/design love.",
#       "This is a tool meant for teachers and grade tracking. I've set up some backend algorithms and api endpoints that allow all kinds of way to display data on the front-end. Been working on this on and off for a month.",
#       "WikiMe is basically a quiz game based off of Wikipedia. Any help with the backend of this project would be appreciated!",
#       "My language learning app! This is an advanced project that utilizes machine learning to match a student's current skill level with the difficulty of content and lessons that are served up. The idea is for all lessons to be 'dynamic' based on the student, no student learns the same way! I'm using Python, React Native, Xcode.",
#       "Building this tool as a way to track who's sus in Among Us. Let's build this thing and play some Among Us!",
#       "This is my fancy to-do list. Well, it started out as a to-do list. It's now turned into a kind of Evernote clone that does all kinds of stuff. Built with React, Python.",
#       "Trying to create an aggregator tool for video game reviews. Building and utilizing various webscraping tools and hopefully it'll be the Rotten Tomatoes of video game reviews.",
#       "2020 was rough, and there's never been a better time to give to charity. I'm trying to build a tool to make that as easy as possible. Need some help with the e-commerce stuff especially.",
#       "This is a kind of Air BnB clone. Backend includes a relational database of properties, renters, propery owners, and locations. Currently hooking various APIs, like Google Maps and creating a custom UI overlay for it.",
#       "Building a 4-player version of Pong. Yeah, that's right. 4-player PONG. Lots of game logic and game state management on this project. Also beent trickey setting up game 'rooms' for multiple logged in players to match and play a game. Super fun, super pongy.",
#       "A collaborative project for a collaborative app. Utilizing Rails and React to create a polling app that you can use between friends. Would love to also build this in React Native.",
#       "Started working on this project last year and have just started working on it again. A way to trade skills with others. The backend API endpoints could use some work.",
#       "A fun new alarm clock app. Wakes you up with Zombie noises. 'Nuff said.",
#       "This is an extension of the DPL 'Ruby Casino' assignment! Putting this all into a React front-end.",
#       "A project managment tool. I'm trying to get fancy with the UI (drag and drop, snap, etc), so anyone who wants to help out on the front-end, please ask to contribute!",
#       "This is a project that I am designing to help track healthy habits like nutrition, sleep, meditation, exercise, etc. Still has some work and any contributions would be great (QA, UX, UI, database managment, etc).",
#       "Track the latest stock trends in Big Ole' Stonks. Inspired by the meteoric rise in GameStop stock price.",
#       "Photospree is a photo sharing app, similar to instagram. The site is looking good at the moment, but could use some help with making it responsive.",
#       "This app is a way for gym buddies to compete with their exercise. Allows video upload, photo upload. Rails with React frontend."] }
# ]