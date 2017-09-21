class CreateBusinesses < ActiveRecord::Migration[5.1]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.string :phone
      t.string :url
      t.float :lat
      t.float :lng
      t.integer :owner_id

      t.timestamps
    end
    add_index :businesses, :name
    add_index :businesses, :address
    add_index :businesses, :city
    add_index :businesses, :state
    add_index :businesses, :zipcode
    add_index :businesses, :owner_id
  end
end
