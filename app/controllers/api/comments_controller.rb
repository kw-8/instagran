class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.where(post_id: params[:post_id])
    render :index
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: @comment
  end

  def comment_params
    params.require(:comment).permit(:commenter_id, :post_id, :body)
  end
end
