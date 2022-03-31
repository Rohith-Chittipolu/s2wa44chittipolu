
var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var m;
  
  var random = Math.random();
  console.log(req.query.m);
  x = req.query.m;

  // checking if url has params
  if (m == undefined) {
    m = random;
  }
  
  let cos = Math.cos(m,m) 
  let asin =Math.asin(m)
  let asinh = Math.asinh(m)
 
  res.render('computation', {
    title: 'Computation',
    Calculate: `applied to ` + m  + ` is ` + cos ,
    c1: `applied to ` + m + ` is ` + asin,
    c2: `applied to ` + m + ` is ` + asinh,
    
  });
});

module.exports = router;