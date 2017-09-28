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
json.image_ids business.images.map(&:id)
