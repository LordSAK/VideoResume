class ResumesController < ApplicationController
  def new
  	@sections=Section.joins("inner join template_sections ts on ts.section_id=sections.id inner join templates t on t.id=ts.template_id inner join openings o on o.template_id=t.id").where("o.id = ?",params[:opening_id])
  	@opening=params[:opening_id]
  end

  def create
    #redirect_to root_path
    @resume=Resume.new(:user_id => current_user.id, :opening_id => params[:opening_id], :InterviewDate => params[:TxtBx_DateTime], :From => params[:timingFrom], :To => params[:timingTo] )
    @resume.save
  	params[:Self].each_with_index do |s,i|
  		params[:Sections].each_with_index do |sec,j|
  			if i==j
  				File.open(Rails.root.join('public', 'data', s.original_filename.to_s.split('.')[0]+"sec"+i.to_s+"opening"+params[:opening_id]+"user"+current_user.id.to_s+ "." +s.original_filename.to_s.split('.')[1]), 'wb') do |file|
  					file.write(s.read)
  					puts params[sec]
            path="/data/"+s.original_filename.to_s.split('.')[0]+"sec"+i.to_s+"opening"+params[:opening_id]+"user"+current_user.id.to_s+"."+s.original_filename.to_s.split('.')[1]
  					@resumesec=ResumeSection.new(:ResumePath => path, :section_id => sec,  :Rate => params[sec],:Resume_id => @resume.id)
            @resumesec.save
  				end
  			end
  		end
  	end
    redirect_to "/viewresumes"
  end

  def edit
    @sections=Section.joins("inner join template_sections ts on ts.section_id=sections.id inner join templates t on t.id=ts.template_id inner join openings o on o.template_id=t.id").where("o.id = ?",params[:id])
    @opening=params[:id]
  end

  def index
  end
end
