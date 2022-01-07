class User < ApplicationRecord
  validates :email, :username, presence: true, uniqueness: true
  validates :full_name, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  attr_reader :password
  after_initialize :ensure_session_token

  has_one_attached :profile_picture

  has_many :posts,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: 'Post',
    dependent: :destroy

  # -------- likes --------
  has_many :likes,
    foreign_key: :liker_id,
    class_name: 'Like'

  has_many :liked_posts,
    through: :likes,
    source: :liked

  # -------- follows --------
  has_many :received_follows,
    foreign_key: :followed_id,
    class_name: 'Follow'

  has_many :given_follows,
    foreign_key: :follower_id,
    class_name: 'Follow'
  
  has_many :followers,
    through: :received_follows,
    source: :follower
  
  has_many :following,
    through: :given_follows,
    source: :followed

  def self.find_by_credentials(un, pw)
    @user = User.find_by(username: un)
    @user && @user.is_valid_password?(pw) ? @user : nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_valid_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
