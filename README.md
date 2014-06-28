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

Reset User Password
```
sudo service postgresql stop
sudo vim /etc/postgresql/9.3/main/pg_hba.conf
sudo service postgresql start
sudo su - postgres
psql -d template1 -U postgres
alter user postgres with password 'password';sudo 
sudo vim /etc/postgresql/9.3/main/pg_hba.conf
sudo service postgresql start
```

If the pg_hba.conf file doesn't exist there, it's possible it exists elsewhere.  Here's how to find it.
```
sudo update db
locate pg_hba.conf

```



Create solveit user that the Ruby app will use
```
sudo su -postgres
psql
   #postgres-# CREATE ROLE solveit PASSWORD 'password' CREATEDB
```



####Remove Old Ruby
Ubuntu sometimes ships with a messed-up version of ruby
```
sudo apt-get remove -y --purge ruby-rvm ruby
sudo rm -rf /usr/share/ruby-rvm /etc/rmvrc /etc/profile.d/rvm.sh
rm -rf ~/.rvm* ~/.gem/ ~/.bundle*
```

####Install Ruby Version Manager (RVM)
```
curl -L https://get.rvm.io | bash -s stable
source /home/test/.rvm/scripts/rvm
```

####Install Ruby
```
curl -L https://get.rvm.io | bash -s stable --ruby=2.1.1
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
Create the tables, schema, and fill the database with example seed data:
```
rake db:setup
```
Move in the example data
```
rake db:migrate
```

###Setup Forum
Once you type the command below, the termainl will ask you a series of questions.
Just click enter and the default values will be entered.
```
rails g forem:install
```

###Run the Rails app
```
rake test
passenger start
```
