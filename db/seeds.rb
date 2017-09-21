# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo = User.create(username: "demo_user", password:"123456", email: "demo@demo.com", zipcode: 94134)

Business.create(name: "yelp", address: "where", city: "wut", state: "when", zipcode: 94203, owner_id: demo)
Business.create(name: "kfc", address: "where", city: "wut", state: "when", zipcode: 94203, owner_id: demo)
Business.create(name: "mcdonalds", address: "where", city: "wut", state: "when", zipcode: 94203, owner_id: demo)
Business.create(name: "wendys", address: "where", city: "wut", state: "when", zipcode: 94203, owner_id: demo)
Business.create(name: "jack in the crack", address: "where", city: "wut", state: "when", zipcode: 94203, owner_id: demo)
Business.create(name: "chipotle", address: "where", city: "wut", state: "when", zipcode: 94203, owner_id: demo)
