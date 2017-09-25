# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo = User.create(username: "demo_user", password:"123456", email: "demo@demo.com", zipcode: 94134)

Business.create(name: "Box Kitchen", address: "431 Natoma St", city: "San Francisco",
state: "CA", zipcode: 94103, lat: 37.7809504, lng: -122.4067438, phone: "(415) 580-7170", url: "www.pourguys.com", owner_id: demo.id)
Business.create(name: "Zen Izakaya", address: "764 Harrison St", city: "San Francisco",
state: "CA", zipcode:94107, lat: 37.7815308, lng: -122.3990101, phone: "(415) 222-9988", url: "www.zenizakayasf.com", owner_id: demo.id)
Business.create(name: "Tacorea", address: "809 Bush St", city: "San Francisco",
state: "CA", zipcode: 94108, lat: 37.789745, lng: -122.4105791, phone: "(415) 885-1325", url: "www.tacoreasf.com", owner_id: demo.id)
Business.create(name: "Marufuku Ramen", address: "1581 Webster St", city: "San Francisco",
state: "CA", zipcode: 94115, lat: 37.7850458, lng: -122.4320932, phone: "(415) 872-9786", url: "www.marufukuramen.com", owner_id: demo.id)
Business.create(name: "Kuma Sushi + Sake", address: "1040 Polk St", city: "San Francisco",
state: "CA", zipcode: 94109, lat: 37.7867162, lng: -122.4196757, phone: "(415) 962-7400", url: "www.kumasf.com", owner_id: demo.id)
Business.create(name: "Hogwash", address: "582 Sutter St", city: "San Francisco",
state: "CA", zipcode: 94102, lat: 37.7891754, lng: -122.4099292, phone: "(415) 361-5500", url: "www.hogwashsf.com", owner_id: demo.id)
Business.create(name: "Nojo Ramen Tavern", address: "231 Franklin St", city: "San Francisco",
state: "CA", zipcode: 94102, lat: 37.7767014, lng: -122.4214817, phone: "(415) 896-4587", url: "www.nojosf.com", owner_id: demo.id)
Business.create(name: "The Pork Exchange", address: "807 Ellis St", city: "San Francisco",
state: "CA", zipcode: 94109, lat: 37.78380600000001, lng: -122.4196992, phone: "(415) 932-6931", owner_id: demo.id)
Business.create(name: "Nopa", address: "560 Divisadero St", city: "San Francisco",
state: "CA", zipcode: 94117, lat: 37.7749029, lng: -122.4374737, phone: "(415) 864-8643", url: "www.nopasf.com", owner_id: demo.id)
Business.create(name: "a Mano", address: "450 Hayes St", city: "San Francisco",
state: "CA", zipcode: 94102, lat: 37.776913, lng: -122.4239543, phone: "(415) 506-7401", url: "www.amanosf.com", owner_id: demo.id)
