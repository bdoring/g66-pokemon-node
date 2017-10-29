exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('pokemon').del(),

    knex('pokemon').insert({
      id: 500,
      name: "Bulbasaur",
      cp: 15,
      in_gym: false,
      trainer_id: 1,
      display_image_url: 'http://pokestadium.com/sprites/xy/bulbasaur.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/bulbasaur-3.gif'
    }),
    knex('pokemon').insert({
      id: 501,
      name: "Ivysaur",
      cp: 60,
      in_gym: false,
      trainer_id: 1,
      display_image_url: 'http://pokestadium.com/sprites/xy/ivysaur.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/ivysaur-3.gif'
    }),
    knex('pokemon').insert({
      id: 502,
      name: "Venusaur",
      cp: 100,
      in_gym: false,
      trainer_id: 2,
      display_image_url: 'http://pokestadium.com/sprites/xy/venusaur.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/venusaur.gif'
    }),
    knex('pokemon').insert({
      id: 503,
      name: "Charmander",
      cp: 15,
      in_gym: false,
      trainer_id: 2,
      display_image_url: 'http://pokestadium.com/sprites/xy/charmander.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/charmander-3.gif'
    }),
    knex('pokemon').insert({
      id: 504,
      name: "Charmeleon",
      cp: 55,
      in_gym: false,
      trainer_id: 2,
      display_image_url: 'http://pokestadium.com/sprites/xy/charmeleon.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/charmeleon-3.gif'
    }),
    knex('pokemon').insert({
      id: 505,
      name: "Charizard",
      cp: 99,
      in_gym: false,
      trainer_id: 3,
      display_image_url: 'http://pokestadium.com/sprites/xy/charizard.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/charizard-3.gif'
    }),
    knex('pokemon').insert({
      id: 506,
      name: "Squirtle",
      cp: 19,
      in_gym: false,
      trainer_id: 4,
      display_image_url: 'http://pokestadium.com/sprites/xy/squirtle.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/squirtle-3.gif'
    }),
    knex('pokemon').insert({
      id: 507,
      name: "Wartortle",
      cp: 22,
      in_gym: false,
      trainer_id: 4,
      display_image_url: 'http://pokestadium.com/sprites/xy/wartortle.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/wartortle-3.gif'
    }),
    knex('pokemon').insert({
      id: 508,
      name: "Blastoise",
      cp: 111,
      in_gym: false,
      trainer_id: 4,
      display_image_url: 'http://pokestadium.com/sprites/xy/blastoise.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/blastoise-2.gif'
    }),
    knex('pokemon').insert({
      id: 509,
      name: "Caterpie",
      cp: 5,
      in_gym: false,
      trainer_id: 3,
      display_image_url: 'http://pokestadium.com/sprites/xy/caterpie.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/caterpie-2.gif'
    }),
    knex('pokemon').insert({
      id: 510,
      name: "Metapod",
      cp: 18,
      in_gym: false,
      trainer_id: 1,
      display_image_url: 'http://pokestadium.com/sprites/xy/metapod.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/metapod.gif'
    }),
    knex('pokemon').insert({
      id: 511,
      name: "Butterfree",
      cp: 104,
      in_gym: false,
      trainer_id: 1,
      display_image_url: 'http://pokestadium.com/sprites/xy/butterfree.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/butterfree.gif'
    }),

    //babs
    knex("pokemon").insert({
      id: 12,
      name: "Weedle",
      cp: 95,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/weedle.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/weedle-2.gif"
    }),
    knex("pokemon").insert({
      id: 13,
      name: "Kakuna",
      cp: 8,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/kakuna.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/kakuna-2.gif"
    }),
    knex("pokemon").insert({
      id: 14,
      name: "Beedrill",
      cp: 15,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/beedrill.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/beedrill.gif"
    }),
    knex("pokemon").insert({
      id: 15,
      name: "Pidgey",
      cp: 96,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/pidgey.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/pidgey.gif"
    }),
    knex("pokemon").insert({
      id: 16,
      name: "Pidgeotto",
      cp: 64,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/pidgeotto.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/pidgeotto.gif"
    }),
    knex("pokemon").insert({
      id: 17,
      name: "Pidgeot",
      cp: 70,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/pidgeot.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/pidgeot-3.gif"
    }),
    knex("pokemon").insert({
      id: 18,
      name: "Rattata",
      cp: 77,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/rattata.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/rattata.gif"
    }),
    knex("pokemon").insert({
      id: 19,
      name: "Raticate",
      cp: 42,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/raticate.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/raticate.gif"
    }),
    knex("pokemon").insert({
      id: 20,
      name: "Spearow",
      cp: 81,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/spearow.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/spearow.gif"
    }),
    knex("pokemon").insert({
      id: 21,
      name: "Fearow",
      cp: 84,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/fearow.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/fearow.gif"
    }),
    knex("pokemon").insert({
      id: 22,
      name: "Ekans",
      cp: 83,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/ekans.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/ekans.gif"
    }),
    knex("pokemon").insert({
      id: 23,
      name: "Arbok",
      cp: 58,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/arbok.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/arbok.gif"
    }),
    knex("pokemon").insert({
      id: 24,
      name: "Pikachu",
      cp: 96,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/pikachu.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/pikachu-3.gif"
    }),
    knex("pokemon").insert({
      id: 25,
      name: "Raichu",
      cp: 41,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/raichu.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/raichu-3.gif"
    }),
    knex("pokemon").insert({
      id: 26,
      name: "Sandshrew",
      cp: 30,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/sandshrew.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/sandshrew.gif"
    }),
    knex("pokemon").insert({
      id: 27,
      name: "Sandslash",
      cp: 64,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/sandslash.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/sandslash.gif"
    }),
    knex("pokemon").insert({
      id: 28,
      name: "Nidoran♀",
      cp: 47,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/nidoranf.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/nidoranf.gif"
    }),
    knex("pokemon").insert({
      id: 29,
      name: "Nidorina",
      cp: 67,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/nidorina.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/nidorina.gif"
    }),
    knex("pokemon").insert({
      id: 30,
      name: "Nidoqueen",
      cp: 69,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/nidoqueen.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/nidoqueen.gif"
    }),
    knex("pokemon").insert({
      id: 31,
      name: "Nidoran♂",
      cp: 44,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/nidoranm.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/nidoranm.gif"
    }),
    knex("pokemon").insert({
      id: 32,
      name: "Nidorino",
      cp: 63,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/nidorino.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/nidorino.gif"
    }),
    knex("pokemon").insert({
      id: 33,
      name: "Nidoking",
      cp: 62,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/nidoking.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/nidoking.gif"
    }),
    knex("pokemon").insert({
      id: 34,
      name: "Clefairy",
      cp: 55,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/clefairy.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/clefairy.gif"
    }),
    knex("pokemon").insert({
      id: 35,
      name: "Clefable",
      cp: 37,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/clefable.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/clefable.gif"
    }),
    knex("pokemon").insert({
      id: 36,
      name: "Vulpix",
      cp: 37,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/vulpix.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/vulpix.gif"
    }),
    knex("pokemon").insert({
      id: 37,
      name: "Ninetales",
      cp: 87,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/ninetales.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/ninetales-3.gif"
    }),
    knex("pokemon").insert({
      id: 38,
      name: "Jigglypuff",
      cp: 75,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/jigglypuff.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/jigglypuff-3.gif"
    }),
    knex("pokemon").insert({
      id: 39,
      name: "Wigglytuff",
      cp: 14,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/wigglytuff.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/wigglytuff.gif"
    }),
    knex("pokemon").insert({
      id: 40,
      name: "Zubat",
      cp: 5,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/zubat.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/zubat-3.gif"
    }),
    knex("pokemon").insert({
      id: 41,
      name: "Golbat",
      cp: 67,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/golbat.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/golbat-3.gif"
    }),
    knex("pokemon").insert({
      id: 42,
      name: "Oddish",
      cp: 91,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/oddish.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/oddish.gif"
    }),
    knex("pokemon").insert({
      id: 43,
      name: "Gloom",
      cp: 14,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/gloom.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/gloom.gif"
    }),
    knex("pokemon").insert({
      id: 44,
      name: "Vileplume",
      cp: 48,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/vileplume.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/vileplume.gif"
    }),
    knex("pokemon").insert({
      id: 45,
      name: "Paras",
      cp: 29,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/paras.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/paras.gif"
    }),
    knex("pokemon").insert({
      id: 46,
      name: "Parasect",
      cp: 92,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/parasect.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/parasect.gif"
    }),
    knex("pokemon").insert({
      id: 47,
      name: "Venonat",
      cp: 76,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/venonat.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/venonat.gif"
    }),
    knex("pokemon").insert({
      id: 48,
      name: "Venomoth",
      cp: 41,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/venomoth.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/venomoth.gif"
    }),
    knex("pokemon").insert({
      id: 49,
      name: "Diglett",
      cp: 41,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/diglett.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/diglett.gif"
    }),
    knex("pokemon").insert({
      id: 50,
      name: "Dugtrio",
      cp: 38,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/dugtrio.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/dugtrio.gif"
    }),
    knex("pokemon").insert({
      id: 51,
      name: "Meowth",
      cp: 76,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/meowth.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/meowth.gif"
    }),
    knex("pokemon").insert({
      id: 52,
      name: "Persian",
      cp: 32,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/persian.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/persian.gif"
    }),
    knex("pokemon").insert({
      id: 53,
      name: "Psyduck",
      cp: 53,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/psyduck.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/psyduck-3.gif"
    }),
    knex("pokemon").insert({
      id: 54,
      name: "Golduck",
      cp: 44,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/golduck.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/golduck.gif"
    }),
    knex("pokemon").insert({
      id: 55,
      name: "Mankey",
      cp: 15,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/mankey.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/mankey.gif"
    }),
    knex("pokemon").insert({
      id: 56,
      name: "Primeape",
      cp: 41,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/primeape.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/primeape.gif"
    }),
    knex("pokemon").insert({
      id: 57,
      name: "Growlithe",
      cp: 84,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/growlithe.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/growlithe.gif"
    }),
    knex("pokemon").insert({
      id: 58,
      name: "Arcanine",
      cp: 20,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/arcanine.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/arcanine.gif"
    }),
    knex("pokemon").insert({
      id: 59,
      name: "Poliwag",
      cp: 49,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/poliwag.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/poliwag.gif"
    }),
    knex("pokemon").insert({
      id: 60,
      name: "Poliwhirl",
      cp: 53,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/poliwhirl.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/poliwhirl.gif"
    }),
    knex("pokemon").insert({
      id: 61,
      name: "Poliwrath",
      cp: 70,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/poliwrath.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/poliwrath.gif"
    }),
    knex("pokemon").insert({
      id: 62,
      name: "Abra",
      cp: 3,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/abra.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/abra-2.gif"
    }),
    knex("pokemon").insert({
      id: 63,
      name: "Kadabra",
      cp: 87,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/kadabra.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/kadabra-3.gif"
    }),
    knex("pokemon").insert({
      id: 64,
      name: "Alakazam",
      cp: 23,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/alakazam.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/alakazam-3.gif"
    }),
    knex("pokemon").insert({
      id: 65,
      name: "Machop",
      cp: 7,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/machop.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/machop.gif"
    }),
    knex("pokemon").insert({
      id: 66,
      name: "Machoke",
      cp: 31,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/machoke.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/machoke.gif"
    }),
    knex("pokemon").insert({
      id: 67,
      name: "Machamp",
      cp: 81,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/machamp.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/machamp.gif"
    }),
    knex("pokemon").insert({
      id: 68,
      name: "Bellsprout",
      cp: 64,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/bellsprout.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/bellsprout.gif"
    }),
    knex("pokemon").insert({
      id: 69,
      name: "Weepinbell",
      cp: 33,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/weepinbell.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/weepinbell.gif"
    }),
    knex("pokemon").insert({
      id: 70,
      name: "Victreebel",
      cp: 1,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/victreebel.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/victreebel.gif"
    }),
    knex("pokemon").insert({
      id: 71,
      name: "Tentacool",
      cp: 19,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/tentacool.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/tentacool.gif"
    }),
    knex("pokemon").insert({
      id: 72,
      name: "Tentacruel",
      cp: 96,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/tentacruel.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/tentacruel.gif"
    }),
    knex("pokemon").insert({
      id: 73,
      name: "Geodude",
      cp: 3,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/geodude.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/geodude.gif"
    }),
    knex("pokemon").insert({
      id: 74,
      name: "Graveler",
      cp: 54,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/graveler.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/graveler.gif"
    }),
    knex("pokemon").insert({
      id: 75,
      name: "Golem",
      cp: 91,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/golem.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/golem.gif"
    }),
    knex("pokemon").insert({
      id: 76,
      name: "Ponyta",
      cp: 46,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/ponyta.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/ponyta.gif"
    }),
    knex("pokemon").insert({
      id: 77,
      name: "Rapidash",
      cp: 71,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/rapidash.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/rapidash.gif"
    }),
    knex("pokemon").insert({
      id: 78,
      name: "Slowpoke",
      cp: 72,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/slowpoke.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/slowpoke-3.gif"
    }),
    knex("pokemon").insert({
      id: 79,
      name: "Slowbro",
      cp: 65,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/slowbro.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/slowbro-3.gif"
    }),
    knex("pokemon").insert({
      id: 80,
      name: "Magnemite",
      cp: 23,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/magnemite.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/magnemite.gif"
    }),
    knex("pokemon").insert({
      id: 81,
      name: "Magneton",
      cp: 81,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/magneton.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/magneton.gif"
    }),
    knex("pokemon").insert({
      id: 82,
      name: "Farfetch'd",
      cp: 33,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/farfetchd.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/farfetchd.gif"
    }),
    knex("pokemon").insert({
      id: 83,
      name: "Doduo",
      cp: 88,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/doduo.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/doduo-3.gif"
    }),
    knex("pokemon").insert({
      id: 84,
      name: "Dodrio",
      cp: 31,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/dodrio.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/dodrio-2.gif"
    }),
    knex("pokemon").insert({
      id: 85,
      name: "Seel",
      cp: 44,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/seel.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/seel.gif"
    }),
    knex("pokemon").insert({
      id: 86,
      name: "Dewgong",
      cp: 68,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/dewgong.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/dewgong.gif"
    }),
    knex("pokemon").insert({
      id: 87,
      name: "Grimer",
      cp: 28,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/grimer.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/grimer.gif"
    }),
    knex("pokemon").insert({
      id: 88,
      name: "Muk",
      cp: 70,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/muk.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/muk.gif"
    }),
    knex("pokemon").insert({
      id: 89,
      name: "Shellder",
      cp: 98,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/shellder.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/shellder.gif"
    }),
    knex("pokemon").insert({
      id: 90,
      name: "Cloyster",
      cp: 75,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/cloyster.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/cloyster.gif"
    }),
    knex("pokemon").insert({
      id: 91,
      name: "Gastly",
      cp: 59,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/gastly.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/gastly.gif"
    }),
    knex("pokemon").insert({
      id: 92,
      name: "Haunter",
      cp: 26,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/haunter.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/haunter-3.gif"
    }),
    knex("pokemon").insert({
      id: 93,
      name: "Gengar",
      cp: 24,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/gengar.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/gengar-3.gif"
    }),
    knex("pokemon").insert({
      id: 94,
      name: "Onix",
      cp: 51,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/onix.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/onix.gif"
    }),
    knex("pokemon").insert({
      id: 95,
      name: "Drowzee",
      cp: 14,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/drowzee.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/drowzee.gif"
    }),
    knex("pokemon").insert({
      id: 96,
      name: "Hypno",
      cp: 33,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/hypno.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/hypno.gif"
    }),
    knex("pokemon").insert({
      id: 97,
      name: "Krabby",
      cp: 60,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/krabby.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/krabby.gif"
    }),
    knex("pokemon").insert({
      id: 98,
      name: "Kingler",
      cp: 81,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/kingler.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/kingler.gif"
    }),
    knex("pokemon").insert({
      id: 99,
      name: "Voltorb",
      cp: 20,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/voltorb.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/voltorb.gif"
    }),
    knex("pokemon").insert({
      id: 100,
      name: "Electrode",
      cp: 71,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/electrode.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/electrode.gif"
    }),
    knex("pokemon").insert({
      id: 101,
      name: "Exeggcute",
      cp: 45,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/exeggcute.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/exeggcute.gif"
    }),
    knex("pokemon").insert({
      id: 102,
      name: "Exeggutor",
      cp: 14,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/exeggutor.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/exeggutor.gif"
    }),
    knex("pokemon").insert({
      id: 103,
      name: "Cubone",
      cp: 7,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/cubone.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/cubone.gif"
    }),
    knex("pokemon").insert({
      id: 104,
      name: "Marowak",
      cp: 24,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/marowak.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/marowak.gif"
    }),
    knex("pokemon").insert({
      id: 105,
      name: "Hitmonlee",
      cp: 50,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/hitmonlee.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/hitmonlee.gif"
    }),
    knex("pokemon").insert({
      id: 106,
      name: "Hitmonchan",
      cp: 86,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/hitmonchan.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/hitmonchan.gif"
    }),
    knex("pokemon").insert({
      id: 107,
      name: "Lickitung",
      cp: 87,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/lickitung.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/lickitung-3.gif"
    }),
    knex("pokemon").insert({
      id: 108,
      name: "Koffing",
      cp: 9,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/koffing.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/koffing.gif"
    }),
    knex("pokemon").insert({
      id: 109,
      name: "Weezing",
      cp: 62,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/weezing.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/weezing.gif"
    }),
    knex("pokemon").insert({
      id: 110,
      name: "Rhyhorn",
      cp: 10,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/rhyhorn.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/rhyhorn.gif"
    }),
    knex("pokemon").insert({
      id: 111,
      name: "Rhydon",
      cp: 26,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/rhydon.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/rhydon.gif"
    }),
    knex("pokemon").insert({
      id: 112,
      name: "Chansey",
      cp: 76,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/chansey.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/chansey.gif"
    }),
    knex("pokemon").insert({
      id: 113,
      name: "Tangela",
      cp: 89,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/tangela.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/tangela.gif"
    }),
    knex("pokemon").insert({
      id: 114,
      name: "Kangaskhan",
      cp: 6,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/kangaskhan.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/kangaskhan.gif"
    }),
    knex("pokemon").insert({
      id: 115,
      name: "Horsea",
      cp: 37,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/horsea.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/horsea.gif"
    }),
    knex("pokemon").insert({
      id: 116,
      name: "Seadra",
      cp: 68,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/seadra.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/seadra.gif"
    }),
    knex("pokemon").insert({
      id: 117,
      name: "Goldeen",
      cp: 50,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/goldeen.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/goldeen-2.gif"
    }),
    knex("pokemon").insert({
      id: 118,
      name: "Seaking",
      cp: 97,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/seaking.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/seaking.gif"
    }),
    knex("pokemon").insert({
      id: 119,
      name: "Staryu",
      cp: 97,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/staryu.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/staryu.gif"
    }),
    knex("pokemon").insert({
      id: 120,
      name: "Starmie",
      cp: 22,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/starmie.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/starmie.gif"
    }),
    knex("pokemon").insert({
      id: 121,
      name: "Mr. Mime",
      cp: 2,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/mr-mime.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/mr-mime-2.gif"
    }),
    knex("pokemon").insert({
      id: 122,
      name: "Scyther",
      cp: 97,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/scyther.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/scyther.gif"
    }),
    knex("pokemon").insert({
      id: 123,
      name: "Jynx",
      cp: 1,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/jynx.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/jynx.gif"
    }),
    knex("pokemon").insert({
      id: 124,
      name: "Electabuzz",
      cp: 17,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/electabuzz.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/electabuzz.gif"
    }),
    knex("pokemon").insert({
      id: 125,
      name: "Magmar",
      cp: 20,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/magmar.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/magmar.gif"
    }),
    knex("pokemon").insert({
      id: 126,
      name: "Pinsir",
      cp: 67,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/pinsir.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/pinsir.gif"
    }),
    knex("pokemon").insert({
      id: 127,
      name: "Tauros",
      cp: 97,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/tauros.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/tauros.gif"
    }),
    knex("pokemon").insert({
      id: 128,
      name: "Magikarp",
      cp: 88,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/magikarp.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/magikarp-2.gif"
    }),
    knex("pokemon").insert({
      id: 129,
      name: "Gyarados",
      cp: 67,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/gyarados.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/gyarados-3.gif"
    }),
    knex("pokemon").insert({
      id: 130,
      name: "Lapras",
      cp: 89,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/lapras.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/lapras-3.gif"
    }),
    knex("pokemon").insert({
      id: 131,
      name: "Ditto",
      cp: 89,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/ditto.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/ditto.gif"
    }),
    knex("pokemon").insert({
      id: 132,
      name: "Eevee",
      cp: 13,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/eevee.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/eevee-3.gif"
    }),
    knex("pokemon").insert({
      id: 133,
      name: "Vaporeon",
      cp: 16,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/vaporeon.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/vaporeon-2.gif"
    }),
    knex("pokemon").insert({
      id: 134,
      name: "Jolteon",
      cp: 71,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/jolteon.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/jolteon.gif"
    }),
    knex("pokemon").insert({
      id: 135,
      name: "Flareon",
      cp: 47,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/flareon.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/flareon-2.gif"
    }),
    knex("pokemon").insert({
      id: 136,
      name: "Porygon",
      cp: 40,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/porygon.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/porygon.gif"
    }),
    knex("pokemon").insert({
      id: 137,
      name: "Omanyte",
      cp: 78,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/omanyte.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/omanyte.gif"
    }),
    knex("pokemon").insert({
      id: 138,
      name: "Omastar",
      cp: 45,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/omastar.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/omastar.gif"
    }),
    knex("pokemon").insert({
      id: 139,
      name: "Kabuto",
      cp: 52,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/kabuto.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/kabuto.gif"
    }),
    knex("pokemon").insert({
      id: 140,
      name: "Kabutops",
      cp: 23,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/kabutops.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/kabutops.gif"
    }),
    knex("pokemon").insert({
      id: 141,
      name: "Aerodactyl",
      cp: 62,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/aerodactyl.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/aerodactyl-3.gif"
    }),
    knex("pokemon").insert({
      id: 142,
      name: "Snorlax",
      cp: 31,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/snorlax.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/snorlax.gif"
    }),
    knex("pokemon").insert({
      id: 143,
      name: "Articuno",
      cp: 66,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/articuno.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/articuno.gif"
    }),
    knex("pokemon").insert({
      id: 144,
      name: "Zapdos",
      cp: 18,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/zapdos.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/zapdos.gif"
    }),
    knex("pokemon").insert({
      id: 145,
      name: "Moltres",
      cp: 10,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/moltres.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/moltres.gif"
    }),
    knex("pokemon").insert({
      id: 146,
      name: "Dratini",
      cp: 52,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/dratini.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/dratini.gif"
    }),
    knex("pokemon").insert({
      id: 147,
      name: "Dragonair",
      cp: 56,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/dragonair.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/dragonair-2.gif"
    }),
    knex("pokemon").insert({
      id: 148,
      name: "Dragonite",
      cp: 99,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/dragonite.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/dragonite-2.gif"
    }),
    knex("pokemon").insert({
      id: 149,
      name: "Mewtwo",
      cp: 2,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/mewtwo.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/mewtwo.gif"
    }),
    knex("pokemon").insert({
      id: 150,
      name: "Mew",
      cp: 65,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/mew.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/mew.gif"
    })
    //babs
  );
};
