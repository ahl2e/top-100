require "application_system_test_case"

class WinesTest < ApplicationSystemTestCase
  setup do
    @wine = wines(:one)
  end

  test "visiting the index" do
    visit wines_url
    assert_selector "h1", text: "Wines"
  end

  test "creating a Wine" do
    visit wines_url
    click_on "New Wine"

    fill_in "Color", with: @wine.color
    fill_in "Country", with: @wine.country
    fill_in "Id", with: @wine.id
    fill_in "Issue date", with: @wine.issue_date
    fill_in "Note", with: @wine.note
    fill_in "Price", with: @wine.price
    fill_in "Region", with: @wine.region
    fill_in "Score", with: @wine.score
    fill_in "Taster initials", with: @wine.taster_initials
    fill_in "Top100 rank", with: @wine.top100_rank
    fill_in "Top 100 year", with: @wine.top_100_year
    fill_in "Vintage", with: @wine.vintage
    fill_in "Wine full", with: @wine.wine_full
    fill_in "Winery full", with: @wine.winery_full
    click_on "Create Wine"

    assert_text "Wine was successfully created"
    click_on "Back"
  end

  test "updating a Wine" do
    visit wines_url
    click_on "Edit", match: :first

    fill_in "Color", with: @wine.color
    fill_in "Country", with: @wine.country
    fill_in "Id", with: @wine.id
    fill_in "Issue date", with: @wine.issue_date
    fill_in "Note", with: @wine.note
    fill_in "Price", with: @wine.price
    fill_in "Region", with: @wine.region
    fill_in "Score", with: @wine.score
    fill_in "Taster initials", with: @wine.taster_initials
    fill_in "Top100 rank", with: @wine.top100_rank
    fill_in "Top 100 year", with: @wine.top_100_year
    fill_in "Vintage", with: @wine.vintage
    fill_in "Wine full", with: @wine.wine_full
    fill_in "Winery full", with: @wine.winery_full
    click_on "Update Wine"

    assert_text "Wine was successfully updated"
    click_on "Back"
  end

  test "destroying a Wine" do
    visit wines_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Wine was successfully destroyed"
  end
end
