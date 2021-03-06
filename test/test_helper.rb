
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'minitest/rails/capybara'
require 'capybara/poltergeist'
require 'database_cleaner'
Capybara.javascript_driver = :poltergeist

class ActiveSupport::TestCase
  self.use_transactional_fixtures = false

  def setup
    DatabaseCleaner.strategy = :truncation
    DatabaseCleaner.start
  end

  def teardown
    DatabaseCleaner.clean
  end

end
