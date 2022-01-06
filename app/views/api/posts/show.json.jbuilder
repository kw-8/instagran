json.partial! 'api/posts/post', post: @post

# json.comments do
#   @comments.each do |comment|
#     json.set! comment.id do
#       json.extract! comment, :id, :post_id, :commenter_id, :body
#     end
#   end if @comments
# end