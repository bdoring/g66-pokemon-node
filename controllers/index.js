var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/pokemon');
});

router.get('/pokemon', function(req, res, next) {
  res.render('pokemon/index', { passedInData: 'Express' });
})

module.exports = router;
