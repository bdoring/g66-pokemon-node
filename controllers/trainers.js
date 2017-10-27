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
    });
});

router.get('/:id', function(req, res) {
  knex('trainers')
    .where('trainers.id', req.params.id)
    .then((trainerResult) => {
      knex('pokemon')
        .where('pokemon.trainer_id', trainerResult[0].id)
        .then((pokemonList => {
          res.render('trainers/viewTrainer', {trainer: trainerResult[0], pokemon: pokemonList});
        }))
    })
});

module.exports = router;
