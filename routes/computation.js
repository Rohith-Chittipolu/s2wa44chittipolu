var express = require('express');
var router = express.Router();
var m = Math.random();


console.log(m);


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('computation', { Calculate: 'Cos of ' +m+' is '+Math.cos(m) });
 

});

module.exports = router;