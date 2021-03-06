class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :post_id, null: false

      t.index [:liker_id, :post_id], unique: true

      t.timestamps
    end
  end
end
