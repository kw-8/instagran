class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :post_id, null: false
      t.integer :commenter_id, null: false
      t.text :body, null: false

      t.index :post_id
      t.index :commenter_id

      t.timestamps
    end
  end
end
