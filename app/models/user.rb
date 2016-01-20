class User < ActiveRecord::Base
  has_many :tasks
  has_many :task_lists
  validates :email, presence: true, uniqueness: true

  has_secure_password
end
