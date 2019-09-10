json.extract! wine, :id, :id, :winery_full, :wine_full, :vintage, :note, :taster_initials, :color, :country, :region, :score, :price, :issue_date, :top_100_year, :top100_rank, :created_at, :updated_at
json.url wine_url(wine, format: :json)
