json.extract! review, :id, :body, :user_id, :business_id, :rating
json.created_at review.created_at.strftime('%-m/%-d/%Y')
