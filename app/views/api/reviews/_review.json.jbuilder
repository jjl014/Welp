json.extract! review, :id, :body, :user_id, :business_id, :rating
json.created_at review.created_at.strftime('%-m/%-d/%Y')
json.set! "user" do
  json.username review.user.username
  json.num_reviews review.user.reviews.count
end
