var express = require('express');
require('dotenv').config();
const app = express();
var http = require('http').Server(app);
var path=require('path');
const multer = require('multer');
var bodyParser = require('body-parser')
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

app.get('/', function (req, res) {
  res.cookie('name', 'express').sendFile(path.join(__dirname, 'build', 'index.html'));

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
process.env.REACT_APP_PUBLIC_URL="hello"
console.log("process",process.env.REACT_APP_PUBLIC_URL);

  http.listen(8000,addresses[0], function() {  //,'192.168.1.18'
    console.log('listening on'+addresses[0]+':8000');
  });
