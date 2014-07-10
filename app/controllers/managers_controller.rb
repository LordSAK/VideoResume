class ManagersController < ApplicationController
  def managerviewresume
    @openings = Opening.joins("inner join resumes on openings.id=resumes.opening_id")
    if !params[:val].blank?
      @users=User.joins("inner join resumes on resumes.user_id=users.id").where("opening_id=?",params[:val])
    end
    if !params[:managerviewresumes].nil?
      @mngr_selection = params[:managerviewresumes][:select]
      @mngr_tech_skills = params[:managerviewresumes][:tech_skills]
      @mngr_pre_skills = params[:managerviewresumes][:pre_skills]
      @mngr_mng_skills = params[:managerviewresumes][:mng_skills]
      @mngr_comments = params[:managerviewresumes][:Comments]
      
      @selected=SelectionCandidate.where('"OpeningsID" = ? and "CandidateID" = ?',params[:opening_id],params[:candidate_id])
      if @selected.nil?
        @candidateSelection = SelectionCandidate.new(:ManagerID => current_user.id, :ManagerSelection => @mngr_selection, :Mngr_Tech_Skills => @mngr_tech_skills, :Mngr_Pre_Skills => @mngr_pre_skills, :Mngr_Mng_Skills => @mngr_mng_skills, :Mngr_Comments => @mngr_comments,:OpeningsID=> params[:opening_id], :CandidateID =>params[:candidate_id])
        @candidateSelection.save
      else
       @selected.first.update_attribute(:ManagerID => current_user.id)
       @selected.first.update_attribute(:ManagerSelection => @mngr_selection)
       @selected.first.update_attribute(:Mngr_Tech_Skills => @mngr_tech_skills)
       @selected.first.update_attribute(:Mngr_Pre_Skills => @mngr_pre_skills)
       @selected.first.update_attribute(:Mngr_Mng_Skills => @mngr_mng_skills)
       @selected.first.update_attribute(:Mngr_Comments => @mngr_comments)
      end
    end
    #@condidateSelection = CondidateSelection.new(:UserID => current_user.id, :CandidateID => , :OpeningsID => , :ConsultantID => , :ConsultantSelection => , :Con_Tech_Skills => , :Con_Pre_Skills => , :Con_Mng_Skills => , :Con_Comments => , :ManagerID => , :ManagerSelection => mngr_selection, :Mngr_Tech_Skills => mngr_tech_skills, :Mngr_Pre_Skills => mngr_pre_skills, :Mngr_Mng_Skills => mngr_mng_skills, :Mngr_Comments => mngr_comments)
    #@condidateSelection = CondidateSelection.new(:UserID => current_user.id, :CandidateID => , :OpeningsID => , :ConsultantID => , :ConsultantSelection => , :Con_Tech_Skills => , :Con_Pre_Skills => , :Con_Mng_Skills => , :Con_Comments => , :ManagerID => , :ManagerSelection => , :Mngr_Tech_Skills => , :Mngr_Pre_Skills => , :Mngr_Mng_Skills => , :Mngr_Comments => )
    #@templateSection=TemplateSection.new(:template_id => params[:idTemp],:section_id => @section.id)
    #@templateSection.save
  end

  def manageroption
  end

  def managerdecision
    @selection_candidate = SelectionCandidate.find(:all, :conditions => [ '"ConsultantSelection" = ? and "ManagerSelection" = ?', "Yes", "Yes" ])
  end

  def schedule
  end
end
