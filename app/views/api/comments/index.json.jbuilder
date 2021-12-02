json.array! @comments do |comment|
  json.partial! `api/posts/#{comment.postId}/comments/#{comment.id}`, comment: comment
end