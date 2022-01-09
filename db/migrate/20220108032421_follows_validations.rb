class FollowsValidations < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:follows, :follower_id, false)
    change_column_null(:follows, :followed_id, false)
  end
end
