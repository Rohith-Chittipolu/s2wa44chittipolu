var express = require('express');
const { param } = require('./users');
var router = express.Router();
var m = Math.random().toFixed(2);


console.log(m);
/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.query.m != undefined) {
    m = req.query.m;
  }
   
  res.render('computation', { Calculate: 'Cos of ' +m+' is '+Math.cos(m) });
});
module.exports = router;