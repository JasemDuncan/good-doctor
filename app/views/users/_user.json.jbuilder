json.extract! user, :id, :name, :username, :password, :age, :created_at, :updated_at
json.url user_url(user, format: :json)
