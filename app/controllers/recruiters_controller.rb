class RecruitersController < ApplicationController
    def recruiterviewresume
        @openings = Opening.joins("inner join resumes on openings.id=resumes.opening_id").select("openings.id,openingtitle")
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
        
        
            @candidateSelection = SelectionCandidate.new(:UserID => current_user.id, :ConsultantSelection => @recruiter_selection, :Con_Tech_Skills => @recruiter_tech_skills, :Con_Pre_Skills => @recruiter_pre_skills, :Con_Mng_Skills => @recruiter_mng_skills, :Con_Comments => @recruiter_comments)
            @candidateSelection.save
        end
        #@condidateSelection = CondidateSelection.new(:UserID => current_user.id, :CandidateID => , :OpeningsID => , :ConsultantID => , :ConsultantSelection => @recruiter_selection, :Con_Tech_Skills => @recruiter_tech_skills, :Con_Pre_Skills => @recruiter_pre_skills, :Con_Mng_Skills => @recruiter_mng_skills, :Con_Comments => @recruiter_comments)
    end
end