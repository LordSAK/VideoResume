class TemplatesController < ApplicationController
  def index
  end

  def edit
  end

  def update
  end

  def new
    @template=Template.new
  end

  def create
    @template=Template.new(:TemplateName => params[:TemplateName],:user_id => 1)#current_user.id)
    @template.save
    @section=Section.new(:SectionName => params[:Section])
    @section.save
    @templateSection=TemplateSection.new(:template_id => @template.id,:section_id => @section.id)
    @templateSection.save
    redirect_to templates_path
  end

  def show
  end
end
