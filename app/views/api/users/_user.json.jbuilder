json.extract! user, :username, :id, :description
json.profilePictureUrl url_for(user.profile_picture) if user.profile_picture.attached?