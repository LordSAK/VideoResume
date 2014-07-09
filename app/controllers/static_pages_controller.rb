class StaticPagesController < ApplicationController
  def new
    @openings = Opening.all
  end

  def openings
  	@getopening = Opening.select('"id","OpeningTitle", "OpeningLocation", "OpeningDescription"' )
  	#@opening1 = Opening.find(:all,:select => 'OpeningTitle')
  end

  def viewresume
  	@openings = Opening.joins("inner join resumes on openings.id=resumes.opening_id").where("resumes.user_id=?",current_user.id)
    if !params[:val].blank?
      @users=User.joins("inner join resumes on resumes.user_id=users.id").where("opening_id=?",params[:val])
    end
  end

end
