require 'spec_helper'

describe StaticPagesController do

  describe "GET 'openings'" do
    it "returns http success" do
      get 'openings'
      response.should be_success
    end
  end

  describe "GET 'viewresume'" do
    it "returns http success" do
      get 'viewresume'
      response.should be_success
    end
  end

end
