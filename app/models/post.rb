class Post < ApplicationRecord
  validates :poster_id, presence: true
  # validates pictures exist
  
  belongs_to :poster,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: 'User'

  has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: 'Comment',
    dependent: :destroy

  has_many :likes,
    foreign_key: :liked_id,
    class_name: 'Like'

  has_many :likers,
    through: :likes,
    source: :liker

  has_many_attached :images
end