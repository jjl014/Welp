class ChangeBusinessPrice < ActiveRecord::Migration[5.1]
  def change
    remove_column :businesses, :price
    add_column :businesses, :price, :integer
  end
end
