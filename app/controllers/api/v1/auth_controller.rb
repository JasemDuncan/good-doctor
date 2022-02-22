class Api::V1::AuthController < ApplicationController

  def login
    @user = User.where(username: params[:username]).first

    if @user
      @user.update(isLoggedIn: true)
      render json: { message: 'Signin successfully', data: @user }, status: :created
    else
      render json: { message: 'User does not exist' }, status: :unauthorized
    end
  end

  def register
    @user = User.new(register_params)
    if @user.save
      render json: { message: 'Signup successfully', data: @user }, status: :created
    else
      render json: { message: 'User already exists' }, status: :unauthorized
    end
  end

  def logout
    @user = User.find(params[:user_id])
    if @user
      @user.update(isLoggedIn: false)
      render json: { message: 'Signout successfully', data: @user }, status: :created
    else
      render json: { message: 'User does not exist' }, status: :unauthorized
    end
  end

  private

  def register_params
    params.require(:auth).permit(:name, :username, :age, :password)
  end
end
