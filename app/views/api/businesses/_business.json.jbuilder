json.extract! business, :id,
                        :name,
                        :address,
                        :city,
                        :state,
                        :zipcode,
                        :phone,
                        :url,
                        :lat,
                        :lng,
                        :owner_id,
                        :price
json.review_ids business.reviews.map(&:id)
if business.images.length > 0
  json.img_preview business.images.first.img_url
end
if business.reviews.length > 0
  json.set! "review_preview" do
    json.user_img business.reviews.first.user.img_url
    json.review business.reviews.first.body
  end
  json.num_reviews business.reviews.count
  json.avg_rating business.reviews.average(:rating)
end
