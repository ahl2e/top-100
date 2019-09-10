class CreateWines < ActiveRecord::Migration[5.2]
  def change
    create_table :wines do |t|
      t.integer :wine_id
      t.string :winery_full
      t.string :wine_full
      t.integer :vintage
      t.string :note
      t.string :taster_initials
      t.string :color
      t.string :country
      t.string :region
      t.integer :score
      t.integer :price
      t.date :issue_date
      t.integer :top_100_year
      t.integer :top100_rank

      t.timestamps
    end
  end
end
