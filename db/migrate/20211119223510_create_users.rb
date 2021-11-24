class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :full_name, null: false
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true

      t.index :username
      t.index :session_token

      t.timestamps
    end
  end
end
