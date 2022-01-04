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
    @post = Post.with_attached_images.find(params[:id])
    if @post
      @comments = @post.comments
      render :show
    else render json: @post.errors.full_messages, status: 404
    end
  end

  def index
    @posts = Post.all
    @comments = Comment.all
    render :index
  end

  def update
    @post = Post.with_attached_images.find(post_params[:id])
    @post.update(post_params)
    render :show
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :index
  end

  def post_params
    params.require(:post).permit(:id, :poster_id, :description, images: [])
  end
end
