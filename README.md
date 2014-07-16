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
In this section, we will create the user 'solveit', which will be used by the Ruby app to talk to the postgreSQL database.  This will prompt you to type in a password.  Make sure to remember it because we will use it later.
```
sudo -u postgres createuser --pwprompt --createdb --login --echo solveit
```

####Add md5 password authentication for 'solveit' user
Now open up pg_hba.conf.
```
sudo vim /etc/postgresql/9.3/main/pg_hba.conf
```

Inser a new line underneath ```local all postgress peer``` and add to it ```local all solveit md5```

This line tells postreSQL to authenticate the 'solveit' user using a password.

####Restart postgreSQL
Restart the postgreSQL service, so it updates with the change you just made to pg_hba.conf.
```
sudo service postgresql restart
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

####Add Password to Database Config File
Replace the three occurences of 'XXX' in the database.yml file with the same password you have chosen above.  You can open up the database.yml file for editing by typing in the following:
```
sudo vim ~/solveitusa/config/database.yml
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

###Setup Database
```
rake db:setup
rake db:migrate
```

###Run the Rails app
```
rake test
passenger start
```

###Create Admin
Before you can create forums, you will have to create a user and change its attribute forem_admin to TRUE.  Details about how to do this will be added here in a future commit.


##All Commands Together
sudo apt-get update; sudo apt-get install -y curl vim git; sudo apt-get install -y postgresql libpq-dev; sudo -u postgres createuser --pwprompt --createdb --login --echo solveit; sudo cp ~/solveitusa/pg_hba.conf /etc/postgresql/9.3/main/pg_hba.conf; sudo service postgresql restart; sudo apt-get remove -y --purge ruby-rvm ruby; sudo rm -rf /usr/share/ruby-rvm /etc/rmvrc /etc/profile.d/rvm.sh; rm -rf ~/.rvm* ~/.gem/ ~/.bundle*; curl -L https://get.rvm.io | bash -s stable --ruby; source /home/test/.rvm/scripts/rvm; gem install rails --no-ri --no-rdoc; gem install bundler --no-ri --no-rdoc; git clone http://github.com/DanielJDufour/solveitusa.git ~/solveitusa; cd ~/solveitusa; bundle update; bundle install; gem install passenger --no-ri --no-rdoc; rake db:setup; rake db:migrate; rake test; passenger start;
