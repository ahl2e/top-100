@wines.each do |wine|
  json.set! wine.id do
  json.extract! wine, :winery_full, :wine_full, :top100_rank, :top100_year, :wine_id, :vintage
  end
end
