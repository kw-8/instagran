@posts.each do |post|
  json.set! post.id do
    json.partial! 'api/posts/post', id: id, poster_id: poster_id, description: description
  end
end