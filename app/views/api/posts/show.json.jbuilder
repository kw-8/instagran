# json.partial! 'api/posts/post', id: id, poster_id: poster_id, description: description
json.extract! @post, :id, :poster_id, :description