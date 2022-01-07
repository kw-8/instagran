# note: @user from controller
json.partial! 'api/users/user', user: @user
json.followers @user.followers
json.following @user.following
json.posts @user.posts.map{|post| { id: post.id,
                                    imageUrls: post.images.map { |file| url_for(file) }}}