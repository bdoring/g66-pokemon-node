var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('get route - message?', req.cookies.message);
  knex('pokemon')
    .orderBy('updated_at', 'ASC')
    .then((pokemonList) => {
      let inGymPokemon = pokemonList.filter(pokemon => pokemon.in_gym);
      let messageToThePage = "";
      if (req.cookies.message) {
        messageToThePage = req.cookies.message;
        res.clearCookie('message');
      }
      res.render('gym/index', {pokemon: pokemonList, battlingPokemon: inGymPokemon, message: messageToThePage});
    })
});


//ADD pokemon to the gym
router.post('/addToGym', function(req, res) {
  let pokemonToBeAdded = {
    player1: 0,
    player2: 0
  };

  let p1 = "";
  let p2 = "";

  if (req.body.player1) {
    pokemonToBeAdded.player1 = req.body.player1;
  }

  if (req.body.player2) {
    pokemonToBeAdded.player2 = req.body.player2;
  }

  if (req.cookies.p1) {
    p1 = req.cookies.p1;
  }

  if (req.cookies.p2) {
    p2 = req.cookies.p2;
  }

  if ((pokemonToBeAdded.player1 !== pokemonToBeAdded.player2) && ((pokemonToBeAdded.player2 != p1) && (pokemonToBeAdded.player2 != p2))){

      knex('pokemon')
        .update({ in_gym: true }, '*')
        .update({ updated_at: knex.fn.now()}, '*')
        .where('pokemon.id', pokemonToBeAdded['player1'])
        .orWhere('pokemon.id', pokemonToBeAdded['player2'])
        .then((updatedPokemon) => {

          if (!(req.cookies.p1 || req.cookies.p2)) {
            res.cookie('p1', pokemonToBeAdded.player1);
            res.cookie('p2', pokemonToBeAdded.player2);
          } else if (!req.cookies.p1) {
            res.cookie('p1', pokemonToBeAdded.player2);
          } else {
            res.cookie('p2', pokemonToBeAdded.player2);
          }
          res.redirect('/gym');
        })
        .catch((err) => {
          console.log(err);
        })
  } else {
    res.cookie('message', 'A Pokemón cannot fight itself! Please choose a different Pokemón!');
    res.redirect('/gym');
  }
});

router.get('/removeGym', function(req, res) {
  knex('pokemon')
    .update({in_gym: false})
    .where('in_gym', true)
    .then(() => {
      if (req.cookies.p1) {
        res.clearCookie('p1');
      }
      if (req.cookies.p2) {
        res.clearCookie('p2');
      }
      res.redirect('/gym');
    })
    .catch((err) => {
      console.log(err);
    })
})

router.get('/battle', function(req, res) {
  knex('pokemon')
    .where('id', req.cookies.p1)
    .orWhere('id', req.cookies.p2)
    .orderBy('updated_at', 'ASC')
    .then((battlingPokemon) => {
      let winnerID = 0;
      let oldCP = 0;
      if (battlingPokemon[0].cp > battlingPokemon[1].cp) {
        winnerID = battlingPokemon[0].id;
        oldCP = battlingPokemon[0].cp;
        res.cookie('message', `${battlingPokemon[0].name} is the WINNER! It gained 20CP.`);
      } else if (battlingPokemon[0].cp < battlingPokemon[1].cp){
        winnerID = battlingPokemon[1].id;
        oldCP = battlingPokemon[1].cp;
        res.cookie('message', `${battlingPokemon[1].name} is the WINNER! It gained 20CP.`);
      } else {
        req.cookies.message = "It's a tie!";
      }
      knex('pokemon')
        .update({cp: (oldCP + 20)})
        .where('id', winnerID)
        .then(() => {
          res.redirect('/gym');
        })
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
