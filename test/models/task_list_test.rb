require 'test_helper'

class TaskListTest < ActiveSupport::TestCase
  test "valid task with valid attributes" do
    task = TaskList.new(title:"TASK", description:"work", user_id: 1)

    assert task.valid?
  end

  test "invalid task without title" do
    task = TaskList.new(description:"work", user_id:1)

    refute task.valid?
  end

  test "invalid task without user id" do
    task = TaskList.new(title:"TASK", description:"work")

    refute task.valid?
  end
end
