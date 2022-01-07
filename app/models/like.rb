class Like < ApplicationRecord
  belongs_to :liker,
    foreign_key: :liker_id,
    class_name: 'User'

  belongs_to :liked,
    foreign_key: :liked_id,
    class_name: 'Post'
end
