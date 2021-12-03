# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
Comment.destroy_all

user = User.create!([
  {email:'super_grandma@instagran.com', username: 'super_grandma', full_name: 'Gran', password: 'supersuper'},
  {email:'egg@instagran.com', username: 'egg', full_name: '🥚', password: 'eggegg'},
  {email:'cat_lady@instagran.com', username: 'the_cat_lady', full_name: 'I ❤️ Cats', password: 'catcat'}
])

post = Post.create!([
  {poster_id: user[0].id, description: 'Drink up! Weekend retreat 🥂🍾'},
  {poster_id: user[2].id, description: 'Whiskers\' favorite thing to do.'},
  {poster_id: user[0].id, description: 'Tea with friends ❤️'},
  {poster_id: user[1].id, description: 'an infamous egg'},
  {poster_id: user[0].id, description: 'Autumn is so nostalgic!'},
  {poster_id: user[2].id, description: 'Welcoming a new member to the family!'}
  # {poster_id: user[2].id, description: 'Blue'},
  # {poster_id: user[0].id, description: '2009'}
])

post[0].images.attach(io: open('https://instagran-seed.s3.us-west-1.amazonaws.com/night_glass.jpg'), filename: 'night_glass.jpg')
post[0].images.attach(io: open('https://instagran-seed.s3.us-west-1.amazonaws.com/igor-oliyarnik-Uu5aXBI1oLk-unsplash.jpg'), filename: 'night_glass.jpg')
post[1].images.attach(io: open('https://instagran-seed.s3.us-west-1.amazonaws.com/floor_kitty.jpg'), filename: 'flop.jpg')
post[2].images.attach(io: open('https://instagran-seed.s3.us-west-1.amazonaws.com/tea-snacks.jpg'), filename: 'tea_snacks.jpg')
post[3].images.attach(io: open('https://instagran-seed.s3.us-west-1.amazonaws.com/Instagram_egg.jpg'), filename: 'egg.jpg')
post[4].images.attach(io: open('https://instagran-seed.s3.us-west-1.amazonaws.com/diana-akhmetianova-AowZ2Bt_T50-unsplash.jpg'), filename: 'leaves.jpg')
post[4].images.attach(io: open('https://instagran-seed.s3.us-west-1.amazonaws.com/elaine-casap-qgHGDbbSNm8-unsplash.jpg'), filename: 'tomatoes.jpg')
post[5].images.attach(io: open('https://instagran-seed.s3.us-west-1.amazonaws.com/mother_and_kitten.jpg'), filename: 'new_kitten.jpg')
# post[6].images.attach(io: open('https://instagran-seed.s3.us-west-1.amazonaws.com/cat_in_blue.jpg'), filename: 'blue.jpg')
# post[7].images.attach(io: File.open('https://instagran-seed.s3.us-west-1.amazonaws.com/la-so-vk4vjTNVrTg-unsplash.jpg'), filename: '2009.jpg')

comment = Comment.create!([
  {commenter_id: user[1].id, post_id: post[0].id, body: 'i am an egg! and i am famous. i am a famous egg.'},
  {commenter_id: user[2].id, post_id: post[0].id, body: 'Great colors'},
  {commenter_id: user[1].id, post_id: post[2].id, body: 'These desserts involved the murder of countless innocent eggs'},
  {commenter_id: user[0].id, post_id: post[5].id, body: 'Nice! Too bad cats don\'t make eggs'},
  {commenter_id: user[1].id, post_id: post[5].id, body: 'What a beautiful kitten!'}
])