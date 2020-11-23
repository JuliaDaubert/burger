// *** Dependencies
// =============================================================
var express = require("express");


const app = express()
 
app.get('/', function (req, res) {
  res.send('This is my Burger App')
})
 
//Heroku requires 8080
app.listen(8080)