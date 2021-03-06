class User < ApplicationRecord
  validates :username, :email, :session_token, :password_digest, presence: true
  validates :session_token, :username, :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token

  has_many :businesses,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Business

  has_many :images
  has_many :reviews

  attr_reader :password


  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username)
    user && user.is_password?(pw) ? user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def generate_unique_session_token
    self.session_token = SecureRandom::urlsafe_base64
    while User.find_by(session_token: session_token)
      self.session_token = SecureRandom::urlsafe_base64
    end
    self.session_token
  end
end
