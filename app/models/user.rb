class User < ActiveRecord::Base
	
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def to_s
    email
  end

  # Per https://github.com/radar/forem
  def forem_name
    name
  end

  def forem_email
    email_address
  end

end
