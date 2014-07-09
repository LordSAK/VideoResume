class RecruitersController < ApplicationController
    def recruiterviewresume
        @openings = Opening.joins("inner join resumes on openings.id=resumes.opening_id")
        if !params[:val].blank?
            @users=User.joins("inner join resumes on resumes.user_id=users.id").where("opening_id=?",params[:val])
        end
        if !params[:recruiterviewresume].nil?
            @recruiter_selection = params[:recruiterviewresume][:select]
            @recruiter_tech_skills = params[:recruiterviewresume][:tech_skills]
            @recruiter_pre_skills = params[:recruiterviewresume][:pre_skills]
            @recruiter_mng_skills = params[:recruiterviewresume][:mng_skills]
            @recruiter_comments = params[:recruiterviewresume][:Comments]
            @recruiter_to_mngr_email = params[:recruiterviewresume][:manager_email]
        
        
            @candidateSelection = SelectionCandidate.new(:ConsultantID => current_user.id, :ConsultantSelection => @recruiter_selection, :Con_Tech_Skills => @recruiter_tech_skills, :Con_Pre_Skills => @recruiter_pre_skills, :Con_Mng_Skills => @recruiter_mng_skills, :Con_Comments => @recruiter_comments,:OpeningsID=> params[:opening_id], :CandidateID =>params[:candidate_id])
            @candidateSelection.save
        end
        #@condidateSelection = CondidateSelection.new(:UserID => current_user.id, :CandidateID => , :OpeningsID => , :ConsultantID => , :ConsultantSelection => @recruiter_selection, :Con_Tech_Skills => @recruiter_tech_skills, :Con_Pre_Skills => @recruiter_pre_skills, :Con_Mng_Skills => @recruiter_mng_skills, :Con_Comments => @recruiter_comments)
    end
    
    def recruiterdecision
    @selection_candidate = SelectionCandidate.find(:all, :conditions => [ '"ConsultantSelection" = ?', "Yes" ])    
    end

    def recruiteroption
        
    end
end