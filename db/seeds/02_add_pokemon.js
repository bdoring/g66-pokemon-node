exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('pokemon').del(),

    knex('pokemon').insert({
      name: "Bulbasaur",
      cp: 15,
      in_gym: false,
      trainer_id: 1,
      display_image_url: 'http://pokestadium.com/sprites/xy/bulbasaur.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/bulbasaur-3.gif'
    }),
    knex('pokemon').insert({
      name: "Ivysaur",
      cp: 60,
      in_gym: false,
      trainer_id: 1,
      display_image_url: 'http://pokestadium.com/sprites/xy/ivysaur.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/ivysaur-3.gif'
    }),
    knex('pokemon').insert({
      name: "Venusaur",
      cp: 100,
      in_gym: false,
      trainer_id: 2,
      display_image_url: 'http://pokestadium.com/sprites/xy/venusaur.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/venusaur.gif'
    }),
    knex('pokemon').insert({
      name: "Charmander",
      cp: 15,
      in_gym: false,
      trainer_id: 2,
      display_image_url: 'http://pokestadium.com/sprites/xy/charmander.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/charmander-3.gif'
    }),
    knex('pokemon').insert({
      name: "Charmeleon",
      cp: 55,
      in_gym: false,
      trainer_id: 2,
      display_image_url: 'http://pokestadium.com/sprites/xy/charmeleon.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/charmeleon-3.gif'
    }),
    knex('pokemon').insert({
      name: "Charizard",
      cp: 99,
      in_gym: false,
      trainer_id: 3,
      display_image_url: 'http://pokestadium.com/sprites/xy/charizard.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/charizard-3.gif'
    }),
    knex('pokemon').insert({
      name: "Squirtle",
      cp: 19,
      in_gym: false,
      trainer_id: 4,
      display_image_url: 'http://pokestadium.com/sprites/xy/squirtle.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/squirtle-3.gif'
    }),
    knex('pokemon').insert({
      name: "Wartortle",
      cp: 22,
      in_gym: false,
      trainer_id: 4,
      display_image_url: 'http://pokestadium.com/sprites/xy/wartortle.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/wartortle-3.gif'
    }),
    knex('pokemon').insert({
      name: "Blastoise",
      cp: 111,
      in_gym: false,
      trainer_id: 4,
      display_image_url: 'http://pokestadium.com/sprites/xy/blastoise.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/blastoise-2.gif'
    }),
    knex('pokemon').insert({
      name: "Caterpie",
      cp: 5,
      in_gym: false,
      trainer_id: 3,
      display_image_url: 'http://pokestadium.com/sprites/xy/caterpie.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/caterpie-2.gif'
    }),
    knex('pokemon').insert({
      name: "Metapod",
      cp: 18,
      in_gym: false,
      trainer_id: 1,
      display_image_url: 'http://pokestadium.com/sprites/xy/metapod.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/metapod.gif'
    }),
    knex('pokemon').insert({
      name: "Butterfree",
      cp: 104,
      in_gym: false,
      trainer_id: 1,
      display_image_url: 'http://pokestadium.com/sprites/xy/butterfree.gif',
      battle_image_url: 'http://pokestadium.com/sprites/xy/butterfree.gif'
    }),

    //babs
    knex("pokemon").insert({
      name: "Weedle",
      cp: 95,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/weedle.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/weedle-2.gif"
    }),
    knex("pokemon").insert({
      name: "Kakuna",
      cp: 8,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/kakuna.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/kakuna-2.gif"
    }),
    knex("pokemon").insert({
      name: "Pidgeot",
      cp: 70,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/pidgeot.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/pidgeot-3.gif"
    }),
    knex("pokemon").insert({
      name: "Pikachu",
      cp: 96,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/pikachu.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/pikachu-3.gif"
    }),
    knex("pokemon").insert({
      name: "Raichu",
      cp: 41,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/raichu.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/raichu-3.gif"
    }),
    knex("pokemon").insert({
      name: "Ninetales",
      cp: 87,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/ninetales.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/ninetales-3.gif"
    }),
    knex("pokemon").insert({
      name: "Jigglypuff",
      cp: 75,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/jigglypuff.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/jigglypuff-3.gif"
    }),
    knex("pokemon").insert({
      name: "Zubat",
      cp: 5,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/zubat.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/zubat-3.gif"
    }),
    knex("pokemon").insert({
      name: "Golbat",
      cp: 67,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/golbat.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/golbat-3.gif"
    }),
    knex("pokemon").insert({
      name: "Psyduck",
      cp: 53,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/psyduck.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/psyduck-3.gif"
    }),
    knex("pokemon").insert({
      name: "Abra",
      cp: 3,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/abra.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/abra-2.gif"
    }),
    knex("pokemon").insert({
      name: "Kadabra",
      cp: 87,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/kadabra.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/kadabra-3.gif"
    }),
    knex("pokemon").insert({
      name: "Alakazam",
      cp: 23,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/alakazam.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/alakazam-3.gif"
    }),
    knex("pokemon").insert({
      name: "Slowpoke",
      cp: 72,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/slowpoke.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/slowpoke-3.gif"
    }),
    knex("pokemon").insert({
      name: "Slowbro",
      cp: 65,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/slowbro.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/slowbro-3.gif"
    }),
    knex("pokemon").insert({
      name: "Doduo",
      cp: 88,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/doduo.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/doduo-3.gif"
    }),
    knex("pokemon").insert({
      name: "Dodrio",
      cp: 31,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/dodrio.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/dodrio-2.gif"
    }),
    knex("pokemon").insert({
      name: "Haunter",
      cp: 26,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/haunter.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/haunter-3.gif"
    }),
    knex("pokemon").insert({
      name: "Gengar",
      cp: 24,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/gengar.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/gengar-3.gif"
    }),
    knex("pokemon").insert({
      name: "Lickitung",
      cp: 87,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/lickitung.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/lickitung-3.gif"
    }),
    knex("pokemon").insert({
      name: "Goldeen",
      cp: 50,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/goldeen.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/goldeen-2.gif"
    }),
    knex("pokemon").insert({
      name: "Mr. Mime",
      cp: 2,
      in_gym: false,
      trainer_id: 2,
      display_image_url: "http://pokestadium.com/sprites/xy/mr-mime.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/mr-mime-2.gif"
    }),
    knex("pokemon").insert({
      name: "Magikarp",
      cp: 88,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/magikarp.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/magikarp-2.gif"
    }),
    knex("pokemon").insert({
      name: "Gyarados",
      cp: 67,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/gyarados.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/gyarados-3.gif"
    }),
    knex("pokemon").insert({
      name: "Lapras",
      cp: 89,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/lapras.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/lapras-3.gif"
    }),
    knex("pokemon").insert({
      name: "Eevee",
      cp: 13,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/eevee.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/eevee-3.gif"
    }),
    knex("pokemon").insert({
      name: "Vaporeon",
      cp: 16,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/vaporeon.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/vaporeon-2.gif"
    }),
    knex("pokemon").insert({
      name: "Flareon",
      cp: 47,
      in_gym: false,
      trainer_id: 4,
      display_image_url: "http://pokestadium.com/sprites/xy/flareon.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/flareon-2.gif"
    }),
    knex("pokemon").insert({
      name: "Aerodactyl",
      cp: 62,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/aerodactyl.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/aerodactyl-3.gif"
    }),
    knex("pokemon").insert({
      name: "Dragonair",
      cp: 56,
      in_gym: false,
      trainer_id: 1,
      display_image_url: "http://pokestadium.com/sprites/xy/dragonair.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/dragonair-2.gif"
    }),
    knex("pokemon").insert({
      name: "Dragonite",
      cp: 99,
      in_gym: false,
      trainer_id: 3,
      display_image_url: "http://pokestadium.com/sprites/xy/dragonite.gif",
      battle_image_url: "http://pokestadium.com/sprites/xy/dragonite-2.gif"
    })
    //babs
  );
};
