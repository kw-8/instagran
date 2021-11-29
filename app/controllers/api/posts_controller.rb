class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render :show
    else render json: @post.errors.full_messages, status: 404
    end
  end

  def index
    @posts = Post.all
    render :index
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    # frontend handles redirect
  end

  def post_params
    params.require(:post).permit(:poster_id, :description, images: [])
  end
end
