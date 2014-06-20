class OpeningsController < ApplicationController
  def new
  	@templates=Template.all
  end

  def create
  	@opening=Opening.new(:OpeningTitle => params[:name], :OpeningLocation => params[:location], :OpeningDescription => params[:description], :template_id => params[:templateSelection])
	@opening.save
	redirect_to templates_path
  end

  def edit
  	@opening=Opening.find(params[:id])
  	@templates=Template.all
  end

  def update
  	@opening=Opening.find(params[:id])
  	@opening.update_attributes(:OpeningTitle => params[:opening][:OpeningTitle], :OpeningLocation => params[:opening][:OpeningLocation], :OpeningDescription => params[:opening][:OpeningDescription], :template_id => params[:opening][:template_id])
  	@opening.save
  	redirect_to templates_path
  end
end
