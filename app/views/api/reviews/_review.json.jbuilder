json.extract! review, :id, :body, :user_id, :business_id, :rating
json.created_at review.created_at.strftime('%-m/%-d/%Y')
json.set! "user" do
  json.username review.user.username
  json.num_reviews review.user.reviews.count
  json.img_url review.user.img_url
end
json.set! "business" do
  json.partial! '/api/businesses/business', business: review.business
end

# json.set! business do
#   json.partial! '/api/businesses/business', business: business
# end
