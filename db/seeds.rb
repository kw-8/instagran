# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all

user = User.create!([
  {email:'demo@instagran.com', username: 'super_grandma', full_name: 'Gran', password: 'demodemo'}
])

Post.create!([
  {poster_id: user.first.id, description: 'eggs are great'},
  {poster_id: user.first.id, description: 'test test post 2'}
])