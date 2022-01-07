class MakeFollowUnique < ActiveRecord::Migration[5.2]
  def change
    add_index :follows, [:followed_id, :follower_id], unique:true
  end
end
