class AddPriceToBusinesses < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :price, :string, :default => "$"
    add_index :businesses, :price
  end
end
