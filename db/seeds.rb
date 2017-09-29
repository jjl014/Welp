# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

demo = User.create(username: "demo_user", password:"123456", email: "demo@demo.com", zipcode: 94134)
u1 = User.create(username: "Andres", password:"123456", email: "andres@demo.com", zipcode: 94134)
u2 = User.create(username: "Jerry", password:"123456", email: "jerry@demo.com", zipcode: 94134)
u3 = User.create(username: "Betty", password:"123456", email: "betty@demo.com", zipcode: 94134)
u4 = User.create(username: "Adrienne", password:"123456", email: "adrienne@demo.com", zipcode: 94134)
u5 = User.create(username: "Ryan", password:"123456", email: "ryan@demo.com", zipcode: 94134)
u6 = User.create(username: "Aaron", password:"123456", email: "aaron@demo.com", zipcode: 94134)
u7 = User.create(username: "Isak", password:"123456", email: "isak@demo.com", zipcode: 94134)
u8 = User.create(username: "Rebekah", password:"123456", email: "rebekah@demo.com", zipcode: 94134)
u9 = User.create(username: "Brian", password:"123456", email: "brian@demo.com", zipcode: 94134)
u10 = User.create(username: "Peter", password:"123456", email: "peter@demo.com", zipcode: 94134)
u11 = User.create(username: "Leia", password:"123456", email: "leia@demo.com", zipcode: 94134)
u12 = User.create(username: "Allan", password:"123456", email: "allan@demo.com", zipcode: 94134)
u13 = User.create(username: "Franks", password:"123456", email: "franks@demo.com", zipcode: 94134)
u14 = User.create(username: "Peter", password:"123456", email: "Peter@demo.com", zipcode: 94134)
u15 = User.create(username: "Trevor", password:"123456", email: "trevor@demo.com", zipcode: 94134)
u16 = User.create(username: "Tony", password:"123456", email: "tony@demo.com", zipcode: 94134)
u17 = User.create(username: "Jesus", password:"123456", email: "jesus@demo.com", zipcode: 94134)
u18 = User.create(username: "Jimmy", password:"123456", email: "jimmy@demo.com", zipcode: 94134)

Business.destroy_all

b1 = Business.create(name: "Box Kitchen", address: "431 Natoma St", city: "San Francisco",
state: "CA", zipcode: 94103, lat: 37.7809504, lng: -122.4067438, phone: "(415) 580-7170",
url: "www.pourguys.com", owner_id: demo.id, price: 1)
b2 = Business.create(name: "Zen Izakaya", address: "764 Harrison St", city: "San Francisco",
state: "CA", zipcode:94107, lat: 37.7815308, lng: -122.3990101, phone: "(415) 222-9988",
url: "www.zenizakayasf.com", owner_id: demo.id, price: 3)
b3 = Business.create(name: "Tacorea", address: "809 Bush St", city: "San Francisco",
state: "CA", zipcode: 94108, lat: 37.789745, lng: -122.4105791, phone: "(415) 885-1325",
url: "www.tacoreasf.com", owner_id: demo.id, price: 1)
b4 = Business.create(name: "Marufuku Ramen", address: "1581 Webster St", city: "San Francisco",
state: "CA", zipcode: 94115, lat: 37.7850458, lng: -122.4320932, phone: "(415) 872-9786",
url: "www.marufukuramen.com", owner_id: demo.id, price: 2)
b5 = Business.create(name: "Kuma Sushi + Sake", address: "1040 Polk St", city: "San Francisco",
state: "CA", zipcode: 94109, lat: 37.7867162, lng: -122.4196757, phone: "(415) 962-7400",
url: "www.kumasf.com", owner_id: demo.id, price: 2)
b6 = Business.create(name: "Hogwash", address: "582 Sutter St", city: "San Francisco",
state: "CA", zipcode: 94102, lat: 37.7891754, lng: -122.4099292, phone: "(415) 361-5500",
url: "www.hogwashsf.com", owner_id: demo.id, price: 1)
b7 = Business.create(name: "Nojo Ramen Tavern", address: "231 Franklin St", city: "San Francisco",
state: "CA", zipcode: 94102, lat: 37.7767014, lng: -122.4214817, phone: "(415) 896-4587",
url: "www.nojosf.com", owner_id: demo.id, price: 2)
b8 = Business.create(name: "The Pork Exchange", address: "807 Ellis St", city: "San Francisco",
state: "CA", zipcode: 94109, lat: 37.78380600000001, lng: -122.4196992, phone: "(415) 932-6931",
owner_id: demo.id, price: 1)
b9 = Business.create(name: "Nopa", address: "560 Divisadero St", city: "San Francisco",
state: "CA", zipcode: 94117, lat: 37.7749029, lng: -122.4374737, phone: "(415) 864-8643",
url: "www.nopasf.com", owner_id: demo.id, price: 2)
b10 = Business.create(name: "a Mano", address: "450 Hayes St", city: "San Francisco",
state: "CA", zipcode: 94102, lat: 37.776913, lng: -122.4239543, phone: "(415) 506-7401",
url: "www.amanosf.com", owner_id: demo.id, price: 3)

Review.destroy_all


user_ids = (User.first.id..User.last.id).to_a
business_ids = (Business.first.id..Business.last.id).to_a

200.times do
  random = rand(20)
  case random
  when 1..3
    rating = 1
    body = "The food was terrible! I'm never coming here ever again!"
  when 4..6
    rating = 2
    body = "This place could definitely use a bit of work. I wouldn't recommend it to my friends."
  when 7..9
    rating = 3
    body = "I'm not sure whether I like it or not. The food was mediocre, but the service was good."
  when 10..12
    rating = 4
    body = "The food and service was good. I'm going to bring my friends next time."
  else
    rating = 5
    body = "Everything was great! The food, the service, the ambience! I highly recommended this place! I'm going to bring my whole family next time."
  end
  Review.create(
    user_id: user_ids.sample,
    business_id: business_ids.sample,
    rating: rating,
    body: body,
  )
end

Image.destroy_all

Image.create(business_id: b10.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642794/amano_1_y4fdmq.jpg")
Image.create(business_id: b10.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642794/amano_2_bkbzac.jpg")
Image.create(business_id: b10.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642794/amano_3_wo3m3r.jpg")

Image.create(business_id: b1.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642794/boxkitchen_1_b3qdbf.jpg")
Image.create(business_id: b1.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642794/boxkitchen_2_diicax.jpg")
Image.create(business_id: b1.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642795/boxkitchen_3_nwchmh.jpg")

Image.create(business_id: b2.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642798/zen_1_bcqnj8.jpg")
Image.create(business_id: b2.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642798/zen_2_wd0bv2.jpg")
Image.create(business_id: b2.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642798/zen_3_xitfxa.jpg")

Image.create(business_id: b3.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642797/taco_1_a7znlp.jpg")
Image.create(business_id: b3.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642798/taco_2_udxn8e.jpg")
Image.create(business_id: b3.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642798/taco_3_mltiov.jpg")

Image.create(business_id: b4.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642796/mara_1_cmwpy3.jpg")
Image.create(business_id: b4.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642796/mara_2_wkixsr.jpg")
Image.create(business_id: b4.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642796/mara_3_xf6kea.jpg")

Image.create(business_id: b5.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642795/kuma_1_z9jteg.jpg")
Image.create(business_id: b5.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642796/kuma_2_sbovg0.jpg")
Image.create(business_id: b5.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642796/kuma_3_yikmam.jpg")

Image.create(business_id: b6.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642795/hog_1_hwbsbo.jpg")
Image.create(business_id: b6.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642795/hog_2_mcdafp.jpg")
Image.create(business_id: b6.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642795/hog_3_wzpvek.jpg")

Image.create(business_id: b7.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642796/nojo_1_mrkkea.jpg")
Image.create(business_id: b7.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642797/nojo_2_qrpwsk.jpg")
Image.create(business_id: b7.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642797/nojo_3_edyhsf.jpg")

Image.create(business_id: b8.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642797/pork_1_gwjps2.jpg")
Image.create(business_id: b8.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642797/pork_2_ej4wdk.jpg")
Image.create(business_id: b8.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642797/pork_3_imizet.jpg")

Image.create(business_id: b9.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642797/nopa_1_gt24zj.jpg")
Image.create(business_id: b9.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642797/nopa_2_sbtevt.jpg")
Image.create(business_id: b9.id, img_url: "https://res.cloudinary.com/jun/image/upload/v1506642797/nopa_3_k5luc0.jpg")
