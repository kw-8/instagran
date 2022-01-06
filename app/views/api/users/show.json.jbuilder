# note: @user from controller
json.partial! 'api/users/user', user: @user
json.posts @user.posts.map{|post| { id: post.id,
                                    imageUrls: post.images.map { |file| url_for(file) }}}