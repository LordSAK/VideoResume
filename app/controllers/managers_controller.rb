class ManagersController < ApplicationController
  def managerviewresume
    @openings = Opening.joins("inner join resumes on openings.id=resumes.opening_id").select("openings.id,openingtitle")
    if !params[:val].blank?
      @users=User.joins("inner join resumes on resumes.user_id=users.id").where("opening_id=?",params[:val])
    end
    if !params[:managerviewresumes].nil?
      @mngr_selection = params[:managerviewresumes][:select]
      @mngr_tech_skills = params[:managerviewresumes][:tech_skills]
      @mngr_pre_skills = params[:managerviewresumes][:pre_skills]
      @mngr_mng_skills = params[:managerviewresumes][:mng_skills]
      @mngr_comments = params[:managerviewresumes][:Comments]
    
      @candidateSelection = SelectionCandidate.new(:UserID => current_user.id, :ManagerSelection => @mngr_selection, :Mngr_Tech_Skills => @mngr_tech_skills, :Mngr_Pre_Skills => @mngr_pre_skills, :Mngr_Mng_Skills => @mngr_mng_skills, :Mngr_Comments => @mngr_comments)
      @candidateSelection.save
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