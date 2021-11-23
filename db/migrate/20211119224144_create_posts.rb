class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :poster_id, null: false
      t.text :description

      t.index :poster_id, unique: true
      
      t.timestamps
    end
  end
end
