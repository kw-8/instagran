class Post < ApplicationRecord
  validates :poster_id, presence: true
  validate :images_validation
  
  has_many_attached :images
  
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
  foreign_key: :post_id,
  class_name: 'Like'
  
  has_many :likers,
  through: :likes,
  source: :liker

  def images_validation
    if images.attached?
      # if ( images.any?{|img| img.byte_size > 5000000} && images.map(&:byte_size).sum > 10000000 )
      #   images.purge
      #   errors[:base] << 'Too big'
      if images.any?{|img| !img.content_type.starts_with?('image/')}
        images.purge
        errors[:base] << 'Wrong format'
      end
    end
  end
end