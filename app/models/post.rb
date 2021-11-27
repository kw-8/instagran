class Post < ApplicationRecord
  validates :poster_id, presence: true
  
  belongs_to :poster,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: 'User'
end