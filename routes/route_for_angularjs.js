var express = require('express');
var router = express.Router();
var path = require('path'); //kojh

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' }); //kojh C.O
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = router;
