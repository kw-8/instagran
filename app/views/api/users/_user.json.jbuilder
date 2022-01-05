json.extract! user, :username, :id, :description
json.postIds user.posts.map{|post| post.id}
# json.profilePictureUrl url_for(user.profile_picture)