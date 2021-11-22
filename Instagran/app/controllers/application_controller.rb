class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  
  helper_method :current_user, :logged_in?

  private
  
  def currentUser
    currentUser ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout
    currentUser.reset_session_token!
    session[:session_token] = nil;
  end

  def logged_in?
    !!currentUser
  end
end
