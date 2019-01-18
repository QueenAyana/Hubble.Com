const db = require('./../models');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
    {
        usernameField:'username'
    },
    function(username,password,callback){
        db.User.findOne({username:username}, (err, user)=>{
            if(err) return callback(err);
            if(!user) return callback(null, false, {message:'Incorrect UserName'});
            if(!user.checkPassword(password)) return callback(null, false, {message: "Incorrect password"});
            return callback(null, user);
        })
    }
)

module.exports = strategy;