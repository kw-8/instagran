# note: @user from controller
json.partial! 'api/users/user', user: @user
json.postIds @user.posts.map{|post| post.id}