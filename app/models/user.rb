class User < ApplicationRecord
  validates :email, :username, presence: true, uniqueness: true
  validates :full_name, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :posts,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: 'Post',
    dependent: :destroy

  has_one_attached :profile_picture

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
