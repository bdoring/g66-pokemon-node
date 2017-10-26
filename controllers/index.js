var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/pokemon');
});

router.get('/pokemon', function(req, res, next) {
  knex('trainers')
    .then((trainerList) => {
      knex('pokemon')
        .select('pokemon.name AS pokemonName', 'pokemon.cp', 'pokemon.in_gym', 'trainers.name AS trainerName')
        .join('trainers', 'trainers.id', 'pokemon.trainer_id')
        .orderBy('pokemon.id', 'ASC')
        .then((pokemonList) => {
          res.render('pokemon/index', { trainers: trainerList, pokemon: pokemonList });
        })
    })
    .catch((err) => {
      console.log(err);
    });
})

//CREATES NEW POKEMON
router.post('/pokemon', function(req, res, next) {
  let newPokemon = {
    name: req.body.name,
    trainer_id: req.body.trainer_id,
    cp: req.body.cp,
    in_gym: false
  }
  knex('pokemon')
    .insert(newPokemon)
    .then(() => {
      res.redirect('/pokemon');
    })
    .catch((err) => {
      console.log(err);
    })
})

module.exports = router;
