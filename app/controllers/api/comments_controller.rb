class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @user.save
      render :show
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
    if @comment.destroy
      redirect_to post_url(@comment.post_id)
    else
      render plain: "Nothing to delete."
    end
  end

  def comment_params
    params.require(:comment).permit(:commenter_id, :post_id, :body)
  end
end
