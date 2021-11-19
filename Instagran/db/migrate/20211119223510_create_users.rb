class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.text :profile_picture_url, null: false
      t.text :header_picture_url, null: false

      t.index :username
      t.index :session_token

      t.timestamps
    end
  end
end
