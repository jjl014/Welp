json.extract! image, :id, :img_url, :user_id, :business_id
json.created_at image.created_at.strftime("%B %d, %Y")
