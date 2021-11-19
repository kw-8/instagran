class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.integer :post_id, null: false
      t.text :picture_url, null: false

      t.timestamps
    end
  end
end
