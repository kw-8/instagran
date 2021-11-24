class Post < ApplicationRecord
  validates :poster_id, presence: true
  
  belongs_to :user
end
