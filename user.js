var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/test';
mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
var db = mongoose.connection;
console.log("connected db")
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var Schema = mongoose.Schema;

var userSchema = Schema({

   name: String,
   pass: String,
});
var User = mongoose.model("user", userSchema);
   console.log("created mongo");
module.exports=User;
