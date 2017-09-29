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
json.img_preview business.images.first.img_url
json.num_reviews business.reviews.count
json.avg_rating (business.reviews.sum(:rating)/business.reviews.count)
