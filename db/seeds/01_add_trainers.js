exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('trainers').del(),

    // Inserts seed entries
    knex('trainers').insert({id: 1, name: "Markel", image_url: 'http://pokestadium.com/assets/img/tools/trainercard/trainers/male/16.png' }),
    knex('trainers').insert({id: 2, name: "Jacob", image_url: 'http://pokestadium.com/assets/img/tools/trainercard/trainers/male/26.png' }),
    knex('trainers').insert({id: 3, name: "Ella", image_url: 'http://pokestadium.com/assets/img/tools/trainercard/trainers/female/10.png' }),
    knex('trainers').insert({id: 4, name: "Valencia", image_url: 'http://pokestadium.com/assets/img/tools/trainercard/trainers/female/107.png' })

  );
};
