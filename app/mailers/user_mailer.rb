class UserMailer < ActionMailer::Base
  #default from: "from@example.com"
  default from: "xxxxx@xxxxx.com"

  def schedule
    #@user = user
    mail to: "hasan.uok@gmail.com", subject: "Hi"
  end

end
