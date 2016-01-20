require 'test_helper'
require 'selenium-webdriver'

class LoginTest < Capybara::Rails::TestCase

  test "unauthenticated user is directed to login page" do
    visit '/'

    assert_equal "/login", current_path
    assert page.has_content?("Log In")
  end

  test "new user can create account with valid attributes" do
    visit '/login'

    within('#signup') do
      fill_in 'user_email', with: 'test@email.com'
      fill_in 'user_password', with: "password"
      fill_in 'user_password_confirmation', with: "password"
      click_on('Save User')
    end

    assert_equal "/", current_path
  end

  test "new user cannot create account with missing email" do
    visit '/login'

    within('#signup') do
      fill_in 'user_password', with: "password"
      fill_in 'user_password_confirmation', with: "password"
      click_on('Save User')
    end

    assert_equal "/login", current_path
    assert page.has_content?("Email can't be blank")
  end

  test "new user cannot create account with missing password" do
    visit '/login'

    within('#signup') do
      fill_in 'user_email', with: 'test@email.com'
      click_on('Save User')
    end

    assert_equal "/login", current_path
    assert page.has_content?("Password can't be blank")
  end

  test "new user cannot create account without matching password" do
    visit '/login'

    within('#signup') do
      fill_in 'user_email', with: 'test@email.com'
      fill_in 'user_password', with: "password"
      fill_in 'user_password_confirmation', with: "notpassword"
      click_on('Save User')
    end

    assert_equal "/login", current_path
    assert page.has_content?("doesn't match")
  end

  test "unauthenticated user can sign in with valid attributes" do
    User.create(email: "test@email.com", password: "password")
    visit '/login'

    within('#login') do
      fill_in 'session_password', with: 'password'
      fill_in 'session_email', with: 'test@email.com'
      click_on('Save Session')
    end

    assert_equal "/", current_path
  end

  test "unauthenticated user cannot sign in with missing name" do
    User.create(email: "test@email.com", password: "password")
    visit '/login'

    within('#login') do
      fill_in 'session_password', with: 'password'
      click_on('Save Session')
    end

    assert_equal "/login", current_path
    assert page.has_content?("Invalid Login")
  end

  test "unauthenticated user cannot sign in with missing password" do
    User.create(email: "test@email.com", password: "password")
    visit '/login'

    within('#login') do
      fill_in 'session_email', with: 'test@email.com'
      click_on('Save Session')
    end

    assert_equal "/login", current_path
    assert page.has_content?("Invalid Login")
  end

  test "authenticated user can logout" do
    User.create(email: "test@email.com", password: "password")
    visit '/login'

    within('#login') do
      fill_in 'session_email', with: 'test@email.com'
      fill_in 'session_password', with: 'password'
      click_on('Save Session')
    end
    click_on('Logout')
    assert_equal "/login", current_path
  end

end
