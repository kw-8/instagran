json.extract! user, :username, :id
json.postIds user.posts.map{|post| post.id}