var express = require('express');
var router = express.Router();
var router = express.Router();
var knex = require('../db/knex.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('trainers')
    .then((trainersList) => {
      res.render('trainers/index', {trainers: trainersList});
    })
    .catch((err) => {
      console.log(err);
    })

});

module.exports = router;
