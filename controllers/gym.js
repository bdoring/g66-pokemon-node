var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  let p1 = '';
  let p2 = '';

  if (req.cookies.p1) {
    p1 = req.cookies.p1;
  }
  if (req.cookies.p2) {
    p2 = req.cookies.p2;
  }

  // knex('pokemon')
  //   .where('pokemon.id', p1, 'or', p2)
  //   .then((pokemonResult) => {
  //     res.render('gym/index', {pokemon: pokemonResult});
  //   })

  knex('pokemon')
    .then((pokemonList) => {
      let inGymPokemon = pokemonList.filter(pokemon => pokemon.in_gym);

      res.render('gym/index', {pokemon: pokemonList, battlingPokemon: inGymPokemon});
    })

});


module.exports = router;
