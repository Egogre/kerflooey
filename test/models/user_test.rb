require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "valid user with valid attributes" do
    user = User.new(email:"test@email.com", password:"password")

    assert user.valid?
  end

  test "invalid user without valid attributes" do
    user1 = User.new(password:"password")
    user2 = User.new(email:"test@email.com")

    refute user1.valid?
    refute user2.valid?
  end

end
