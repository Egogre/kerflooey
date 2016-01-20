require 'test_helper'
require 'selenium-webdriver'

class CreateListTest < Capybara::Rails::TestCase

  def setup
    User.create(email: 'test@email.com', password: "password")
    visit '/login'

    within('#login') do
      fill_in 'session_password', with: 'password'
      fill_in 'session_email', with: 'test@email.com'
      click_on('Save Session')
    end
  end

  test "user can create task list with valid attributes" do
    refute page.has_content?('Test')
    
    within('.add-list') do
      fill_in 'new-list-title', with: 'Test'
      fill_in 'new-list-description', with: "Stuff"
      click_on('save')
    end

    assert_equal "/", current_path
    assert page.has_content?('Test')
  end

end
