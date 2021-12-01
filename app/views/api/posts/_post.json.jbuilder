json.extract! post, :id, :poster_id, :description, :images
json.imageUrls post.images.map { |file| url_for(file) }