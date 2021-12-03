json.extract! user, :username, :id
json.posts user.posts
# json.profilePictureUrl url_for(user.profile_picture)