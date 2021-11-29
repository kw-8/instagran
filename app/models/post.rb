class Post < ApplicationRecord
  validates :poster_id, presence: true
  
  belongs_to :poster,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: 'User'

  has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: 'Comment',
    dependent: :destroy
end