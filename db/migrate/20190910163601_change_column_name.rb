class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :wines, :top_100_year, :top100_year
  end
end
