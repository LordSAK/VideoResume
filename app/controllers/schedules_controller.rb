class SchedulesController < ApplicationController
	def schedule
		#@mail_to = params[:Schedule][:mail_to_address]
		UserMailer.schedule.deliver
	end
end
