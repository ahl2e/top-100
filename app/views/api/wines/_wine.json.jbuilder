json.extract! wine, :id,:wine_id, :winery_full, :wine_full, :vintage, :note, :taster_initials, :color, :country, :region, :score, :price, :issue_date, :top100_year, :top100_rank 


t.integer "wine_id"
t.string "winery_full"
t.string "wine_full"
t.integer "vintage"
t.string "note"
t.string "taster_initials"
t.string "color"
t.string "country"
t.string "region"
t.integer "score"
t.integer "price"
t.date "issue_date"
t.integer "top100_year"
t.integer "top100_rank"
t.datetime "created_at", null: false
t.datetime "updated_at", null: false
