const bcrypt = require('bcrypt')
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = require('../models/adminschema')

module.exports = function(passport){
  passport.use(
    new localStrategy({ usernameField: 'username'}, ( username, password, done) =>  {
      User.findOne({username: username})
      .then(user => {
        if(!user){
          return done(null, false, {});
        }

        bcrypt.compare(password, user.password, (err, isMatch) => { //it compares the hashed password from database
          if(err) throw err;
          if(isMatch){
            return done(null, user); //everything here is from traversy
          } else {
            return done(null, false);
          }
        });

      })
      .catch(err => console.log(err))
    })
  );
  
  passport.serializeUser ((user, done) => {
    done(null, user.id)
  });

  passport.deserializeUser ((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })

}