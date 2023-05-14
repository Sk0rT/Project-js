var template = Handlebars.compile();

var express = require('express');
var router = express.Router();

var profile = require('./profile.js');
app.use('/profile', profile);

router.get('/', function (req, res) {
  res.send('');
})

router.get('/profile', function (req, res) {
  res.send('profile.html');
})

var reg = require('./reg.js');
app.use('/reg', reg);
  
router.get('/reg', function (req, res) {
    res.send('reg.html');
})


