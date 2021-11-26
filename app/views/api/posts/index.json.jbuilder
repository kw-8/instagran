@posts.each do |post|
  json.extract! @post, :description
end