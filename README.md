##Instructions on how to setup Solve It USA

####Update
```
sudo apt-get update
```


####Install Packages That We'll Use Later
```
sudo apt-get install -y curl vim git
```

####Install PostgreSQL
```
sudo apt-get install -y postgresql libpq-dev
```

####Create PostgreSQL User
Create 'solveit' postgreSQL user that Ruby app will use.
```
sudo -u postgres psql
````
Within the psql line, type:
```
CREATE ROLE solveit PASSWORD 'password' CREATEDB;
```
Type in ```\q``` to quit out of psql command line.
Then type ```exit``` to exit out of psql user and return to local user.

Add the following line to pg_hba.conf file and then restart Postresql
```
sudo sed -i '$ a\local all solveit md5' /etc/postgresql/9.3./main/pg_hba.conf
sudo service postregres restart
```

####Remove Old Ruby
Ubuntu sometimes ships with a messed-up version of ruby.
```
sudo apt-get remove -y --purge ruby-rvm ruby
sudo rm -rf /usr/share/ruby-rvm /etc/rmvrc /etc/profile.d/rvm.sh
rm -rf ~/.rvm* ~/.gem/ ~/.bundle*
```

####Install Ruby Version Manager (RVM) and Ruby
```
curl -L https://get.rvm.io | bash -s stable --ruby
source /home/test/.rvm/scripts/rvm
```

###Install Rails
```
gem install rails --no-ri --no-rdoc
```

###Install Bundler
```
gem install bundler --no-ri --no-rdoc
```

###Download this Repository
We recommend placing it in the home directory
```
git clone http://github.com/DanielJDufour/solveitusa.git ~/solveitusa
```

###Install Gems
To install the Gems, first change into the solveitusa directory. 
```
cd ~/solveitusa
bundle update
bundle install
```

###Install Passenger
```
gem install passenger --no-ri --no-rdoc
```

###Set Up Devise
```
rails g devise user
```

###Setup Database
```
rake db:setup
rake db:migrate
```

###Setup Forum
Once you type the command below, the termainl will ask you a series of questions.
Just click enter and the default values will be entered.  Don't overwrite scss file.
```
rails g forem:install
```

###Run the Rails app
```
rake test
passenger start
```
