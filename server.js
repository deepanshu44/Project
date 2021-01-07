var express = require('express');
require('dotenv').config();
const app = express();
var http = require('http').Server(app);
var path=require('path');
var User=require('./user.js')
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
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
  res.setHeader('Access-Control-Allow-Origin', '*');

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

app.get('/*', function (req, res) {
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
      if (!user) { return done(null, false); }
      if (user.pass!==password) { return done(null, false); }
      return done(null, user);
    });
  }
));
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});
app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
  passport.authenticate('local',{failureRedirect: '/error'}),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

process.env.REACT_APP_PUBLIC_URL="hello"
console.log("process",process.env.REACT_APP_PUBLIC_URL);

  http.listen(8000,addresses[0], function() {  //,'192.168.1.18'
    console.log('listening on'+addresses[0]+':8000');
  });
