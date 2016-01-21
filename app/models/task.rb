class Task < ActiveRecord::Base
  belongs_to :user
  belongs_to :task_list
  validates :title, :user_id, :task_list_id, presence: true
end
