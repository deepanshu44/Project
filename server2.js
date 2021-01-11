require('dotenv').config();
var express = require('express');
const app = express();
var http = require('http').Server(app);
var path=require('path');
const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;

app.use(express.static(path.join(__dirname, 'build')));
//Import the mongoose module

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));

});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log("hello");
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));;
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));

});


process.env.REACT_APP_PUBLIC_URL="hello"
console.log("process",process.env.REACT_APP_PUBLIC_URL);

  http.listen(8000);
  ;
