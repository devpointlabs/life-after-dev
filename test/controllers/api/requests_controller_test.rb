require 'test_helper'

class Api::RequestsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_requests_index_url
    assert_response :success
  end

  test "should get show" do
    get api_requests_show_url
    assert_response :success
  end

  test "should get new" do
    get api_requests_new_url
    assert_response :success
  end

  test "should get create" do
    get api_requests_create_url
    assert_response :success
  end

  test "should get update" do
    get api_requests_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_requests_destroy_url
    assert_response :success
  end

end
