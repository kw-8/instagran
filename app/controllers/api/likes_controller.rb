class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def index
    if (params[:liker_id])
      @likes = Like.where(liker_id: params[:liker_id])
    elsif (params[:liked_id])
      @likes = Like.where(post_id: params[:liked_id])
    end
    p "LIKESS"
    p @likes
    p params
    render :index
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render json: @like
  end

  # def like_params
  #   params.require(:like).permit(:liker_id, :liked_id)
  # end
end
