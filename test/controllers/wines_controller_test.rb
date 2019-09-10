require 'test_helper'

class WinesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @wine = wines(:one)
  end

  test "should get index" do
    get wines_url
    assert_response :success
  end

  test "should get new" do
    get new_wine_url
    assert_response :success
  end

  test "should create wine" do
    assert_difference('Wine.count') do
      post wines_url, params: { wine: { color: @wine.color, country: @wine.country, id: @wine.id, issue_date: @wine.issue_date, note: @wine.note, price: @wine.price, region: @wine.region, score: @wine.score, taster_initials: @wine.taster_initials, top100_rank: @wine.top100_rank, top_100_year: @wine.top_100_year, vintage: @wine.vintage, wine_full: @wine.wine_full, winery_full: @wine.winery_full } }
    end

    assert_redirected_to wine_url(Wine.last)
  end

  test "should show wine" do
    get wine_url(@wine)
    assert_response :success
  end

  test "should get edit" do
    get edit_wine_url(@wine)
    assert_response :success
  end

  test "should update wine" do
    patch wine_url(@wine), params: { wine: { color: @wine.color, country: @wine.country, id: @wine.id, issue_date: @wine.issue_date, note: @wine.note, price: @wine.price, region: @wine.region, score: @wine.score, taster_initials: @wine.taster_initials, top100_rank: @wine.top100_rank, top_100_year: @wine.top_100_year, vintage: @wine.vintage, wine_full: @wine.wine_full, winery_full: @wine.winery_full } }
    assert_redirected_to wine_url(@wine)
  end

  test "should destroy wine" do
    assert_difference('Wine.count', -1) do
      delete wine_url(@wine)
    end

    assert_redirected_to wines_url
  end
end
