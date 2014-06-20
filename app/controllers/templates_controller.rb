class TemplatesController < ApplicationController
  def index
    @templates=Template.all
    @openings=Opening.all
  end

  def edit
    @templates=Template.find(params[:id])
    @sections=Section.joins("inner join template_sections on template_sections.section_id=sections.id").where("template_sections.template_id=?",params[:id])
  end

  def update
      if !params[:hidden].blank?
        Section.joins("inner join template_sections on template_sections.section_id=sections.id").where("template_sections.template_id=?",params[:idTemp]).delete_all
        TemplateSection.where("template_id=?",params[:idTemp]).delete_all
        params[:hidden].each do |section|
        if section!=""
          @section=section      
          @section = Section.new(:SectionName => @section)
          @section.save
          @templateSection=TemplateSection.new(:template_id => params[:idTemp],:section_id => @section.id)
          @templateSection.save      
        end
      end
    end
   
    redirect_to templates_path

  end

  def new
    @template=Template.new
  end

  def create
    @template=Template.new(:TemplateName => params[:TemplateName],:user_id => 1)#current_user.id)
    @template.save
    if !params[:hidden].blank?
      params[:hidden].each do |section|
        if section!=""
          @section=section      
          @section = Section.new(:SectionName => @section)
          @section.save
          @templateSection=TemplateSection.new(:template_id => @template.id,:section_id => @section.id)
          @templateSection.save      
        end
      end
    end
   
    redirect_to templates_path
  end

  def show
  end
end
