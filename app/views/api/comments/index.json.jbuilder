@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :post_id, :commenter_id, :body
  end
end