# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

u1 = User.create(username: "Cow", password:"123456", email: "cow@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658447/15698108_1353128034746820_8435894184713746897_n_bmczd4.jpg")
u2 = User.create(username: "Nicholas", password:"123456", email: "jerry@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506659368/960_ypllqb.jpg")
u3 = User.create(username: "Justine", password:"123456", email: "justine@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658448/386332_10150584471394880_730664879_10989924_1619351166_n_wzrmoq.jpg")
u4 = User.create(username: "Alex", password:"123456", email: "alex@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658447/18697997_10207590950846815_3492040588252855241_n_zykgph.jpg")
u5 = User.create(username: "Steven", password:"123456", email: "steven@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658447/16473216_1223298004384090_3769517776834639265_n_hxtmln.jpg")
u6 = User.create(username: "Rabbit", password:"123456", email: "rabbit@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658453/IMAG0232_cybsgr.jpg")
u7 = User.create(username: "Willy", password:"123456", email: "isak@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506659295/Creepy-Condescending-Wonka_ayiahh.jpg")
u8 = User.create(username: "Mae", password:"123456", email: "rebekah@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658448/20170109_113019_xy4t5l.jpg")
u9 = User.create(username: "Audrey", password:"123456", email: "brian@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658449/leia_drooloface_rj7bdm.png")
u10 = User.create(username: "Anthony", password:"123456", email: "anthony@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658448/19642319_1542935312423794_7559554362985582722_n_rkabvb.jpg")
u11 = User.create(username: "Leia", password:"123456", email: "leia@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658448/084_sqornu.png")
u12 = User.create(username: "Allan", password:"123456", email: "allan@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658447/13923250_10209825739378551_5046616638648612571_o_pumzi0.jpg")
u13 = User.create(username: "Mr. Bean", password:"123456", email: "mrbean@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506659249/meme_mr_bean_no_words_dkfapy.jpg")
u14 = User.create(username: "Salt Bae", password:"123456", email: "saltbae@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658448/200_s_jqbo0n.gif")
u15 = User.create(username: "Orma", password:"123456", email: "orma@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658447/14976553_10153471868639229_4012899277812257103_o_jdtbcj.jpg")
u16 = User.create(username: "Tyler", password:"123456", email: "tyler@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658450/Tyler_bym3jx.jpg")
u17 = User.create(username: "Austen", password:"123456", email: "austen@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658448/19554247_10209271564337726_8888921041109262799_n_udkadz.jpg")
u18 = User.create(username: "Jimmy", password:"123456", email: "jimmy@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506658482/20140118_211043_zrxu1x.jpg")

Business.destroy_all

b1 = Business.create(name: "Box Kitchen", address: "431 Natoma St", city: "San Francisco",
state: "CA", zipcode: 94103, lat: 37.7809504, lng: -122.4067438, phone: "(415) 580-7170",
url: "www.pourguys.com", owner_id: u1.id, price: 1)
b2 = Business.create(name: "Zen Izakaya", address: "764 Harrison St", city: "San Francisco",
state: "CA", zipcode:94107, lat: 37.7815308, lng: -122.3990101, phone: "(415) 222-9988",
url: "www.zenizakayasf.com", owner_id: u2.id, price: 3)
b3 = Business.create(name: "Tacorea", address: "809 Bush St", city: "San Francisco",
state: "CA", zipcode: 94108, lat: 37.789745, lng: -122.4105791, phone: "(415) 885-1325",
url: "www.tacoreasf.com", owner_id: u3.id, price: 1)
b4 = Business.create(name: "Marufuku Ramen", address: "1581 Webster St", city: "San Francisco",
state: "CA", zipcode: 94115, lat: 37.7850458, lng: -122.4320932, phone: "(415) 872-9786",
url: "www.marufukuramen.com", owner_id: u4.id, price: 2)
b5 = Business.create(name: "Kuma Sushi + Sake", address: "1040 Polk St", city: "San Francisco",
state: "CA", zipcode: 94109, lat: 37.7867162, lng: -122.4196757, phone: "(415) 962-7400",
url: "www.kumasf.com", owner_id: u5.id, price: 2)
b6 = Business.create(name: "Hogwash", address: "582 Sutter St", city: "San Francisco",
state: "CA", zipcode: 94102, lat: 37.7891754, lng: -122.4099292, phone: "(415) 361-5500",
url: "www.hogwashsf.com", owner_id: u6.id, price: 1)
b7 = Business.create(name: "Nojo Ramen Tavern", address: "231 Franklin St", city: "San Francisco",
state: "CA", zipcode: 94102, lat: 37.7767014, lng: -122.4214817, phone: "(415) 896-4587",
url: "www.nojosf.com", owner_id: u7.id, price: 2)
b8 = Business.create(name: "The Pork Exchange", address: "807 Ellis St", city: "San Francisco",
state: "CA", zipcode: 94109, lat: 37.78380600000001, lng: -122.4196992, phone: "(415) 932-6931",
owner_id: u8.id, price: 1)
b9 = Business.create(name: "Nopa", address: "560 Divisadero St", city: "San Francisco",
state: "CA", zipcode: 94117, lat: 37.7749029, lng: -122.4374737, phone: "(415) 864-8643",
url: "www.nopasf.com", owner_id: u9.id, price: 2)
b10 = Business.create(name: "a Mano", address: "450 Hayes St", city: "San Francisco",
state: "CA", zipcode: 94102, lat: 37.776913, lng: -122.4239543, phone: "(415) 506-7401",
url: "www.amanosf.com", owner_id: u10.id, price: 3)

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

demo = User.create(username: "demo_user", password:"123456", email: "demo@demo.com", zipcode: 94134,
img_url: "https://res.cloudinary.com/jun/image/upload/v1506659435/Doge_sggjpf.jpg")

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
