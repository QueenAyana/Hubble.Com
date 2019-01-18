const passport = require('passport');
const db = require('./../models');
const LocalStrategy = require('./localStrategy');

passport.serializeUser((user, callback) =>{
    callback(null, {_id : user._id});
})

passport.deserializeUser((id, callback) =>{
    db.User.findOne({_id:id}, 'username', (err, user)=>{
        callback(null, user);
    })
})

// setup strategy
passport.use(LocalStrategy);

module.exports = passport;