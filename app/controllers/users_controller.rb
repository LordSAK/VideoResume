class UsersController < ApplicationController
	def new
		@user = User.new
	end

	def create
		@user = User.new(first_name: params[:user][:first_name],
						last_name: params[:user][:last_name],
						email: params[:user][:email],
						password: params[:user][:password],
						password_confirmation: params[:user][:password_confirmation],
						:user_type => params[:type],
						address: params[:user][:address],
						phone: params[:user][:phone],
						country: params[:user][:country]
						)

		if @user.save
			redirect_to root_path
		else
			render 'new'
		end
	end

	def show
		@users=User.find(params[:id])
	end
end
