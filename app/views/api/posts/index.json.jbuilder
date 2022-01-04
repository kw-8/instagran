json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end
# json.comments do
#   @comments.each do |comment|
#     json.set! comment.id do
#       json.extract! comment, :id, :post_id, :commenter_id, :body
#     end
#   end
# end