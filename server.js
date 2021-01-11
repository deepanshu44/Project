var express = require('express');
require('dotenv').config();
const app = express();
var http = require('http').Server(app);
var path=require('path');
var User=require('./user.js')
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
  var GoogleStrategy = require('passport-google-oauth20').Strategy;
const multer = require('multer');
var bodyParser = require('body-parser')
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
var fs=require('fs')

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/component/images/')
  },
  filename: function (req, file, cb) {
    cb(null , file.originalname);
  }

}
)

var upload = multer({storage:storage})

app.use(express.static(path.join(__dirname, 'build')));
//Import the mongoose module

app.get('/', function (req, res) {
  console.log("reqkbb",req.user);
  res.sendFile(path.join(__dirname, 'build', 'index.html'));

});
app.get('/testing',(req,res)=>res.send('failed'))
app.get('/test',
  passport.authenticate('local', { failureRedirect: '/about' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/image',function(req,res){
    let buff = fs.readFileSync(path.join(__dirname, 'src/', 'c-d-x-PDX_a_82obo-unsplash.jpg'),(err, data) => {
                      if (err) throw err;
                      console.log(data);
                    });
                    let base64data = buff.toString('base64');
		res.send(base64data);
              })


var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}
passport.use(new LocalStrategy(
  function(username, password, done) {

    User.findOne({ name: username }, function (err, user) {

      if (err) { return done(err); }
      if (!user) { return done(null, false,{ message: 'Incorrect username.' }); }
      if (user.pass!==password) { return done(null, false,{ message: 'Incorrect password.' }); }
      return done(null, user);
    });
  }
));
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
console.log(profile._json);
const data=JSON.stringify(profile._json);
    User.findOneAndUpdate({ _id: profile.id },{$set:{_id:profile.id}},{upsert:true,returnNewDocument:true}, function (err, user) {
      console.log("user",user);

      return cb(err, profile._json);
    });
  }
));;
passport.serializeUser(function(user, cb) {
console.log("serializeUser",user);
  cb(null, user);
});

passport.deserializeUser(function(id, cb) {

  User.findById(id.sub, function (err, user) {
    console.log("deserializeUser",user,id);
    if (err) { return cb(err); }
    cb(null, user);
  });
});
app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
  passport.authenticate('local',{successRedirect: '/',
                                 failureRedirect: '/error',
                               })
);
app.use('/test', (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.sendStatus(405);
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email','profile'] }));
console.log("hellow");
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log("req user",req.user);
    // Successful authentication, redirect home
    res.redirect('/');
  });
  //app.get('/test',function(req,res){console.log("reqqqqqqqqqqqqqqq",req.user);res.redirect('/users')})
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/loggedout');
  });
  app.post('/test', function(req,res){console.log("post test",req.body,"requser",req.isAuthenticated(),req.user,req.session.passport.user);})
  app.get('/*', function (req, res) {
  res.redirect('/');

});

process.env.REACT_APP_PUBLIC_URL="hello"
console.log("process",process.env.REACT_APP_PUBLIC_URL);

  http.listen(8000);

 // http.listen(8000,addresses[0], function() {  //,'192.168.1.18'
   // console.log('listening on'+addresses[0]+':8000');
