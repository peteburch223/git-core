ENV["RACK_ENV"] ||= "development"
require 'sinatra/base'

class Gitcore < Sinatra::Base

  set :public_folder, 'app'
  get '/' do
    send_file 'app/index.html'
  end
end
