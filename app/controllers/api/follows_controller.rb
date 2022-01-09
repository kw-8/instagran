class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def index
    if (params[:follower_id])
      @follows = Follow.where(follower_id: params[:follower_id])
    elsif (params[:followed_id])
      @follows = Follow.where(followed_id: params[:followed_id])
    end
    render :index
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render json: @follow
  end

  def follow_params
    params.require(:follow).permit(:follower_id, :followed_id)
  end
end