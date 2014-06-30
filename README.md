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
In this section, we will create the user 'solveit', which will be used by the Ruby app to talk to the postgreSQL database.  For the first step, we want to enter into the postgreSQL terminal view by typing the following:
```
sudo -u postgres psql
````
The command line should now start with ```postgres=#```.  Type in the following to create the 'solveit' user, substituting XXX with a password you have chosen. Make sure to include the semi-colon at the end or it won't run.
```
create role solveit with createdb login password 'XXX';
```
After you have created the user enter ```\q``` and this will exit you from the postgreSQL terminal view.


####Add md5 password authentication for 'solveit' user
Now open up pg_hba.conf.
```
sudo vim /etc/postgresql/9.3./main/pg_hba.conf
```

Inser a new line underneath ```local all postgress peer``` and add to it ```local all solveit md5```

This line tells postreSQL to authenticate the 'solveit' user using a password.

####Restart postgreSQL
Restart the postgreSQL service, so it updates with the change you just made to pg_hba.conf.
```
sudo service postregresql restart
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
curl -L https://get.rvm.io | bash -s stable --ruby=2.1.1
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
