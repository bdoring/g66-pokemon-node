
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pokemon', (table) => {
    table.increments();
    table.string('name');
    table.integer('trainer_id')
      .references('id')
      .inTable('trainers')
      .onDelete('CASCADE')
      .index();
    table.integer('cp');
    table.boolean('in_gym');
    table.text('display_image_url')
      .notNullable()
      .defaultTo('http://rs130.pbsrc.com/albums/p248/Gauvrielle/adball.gif~c200');
    table.text('battle_image_url')
      .notNullable()
      .defaultTo('http://rs1341.pbsrc.com/albums/o744/shinydiane/GIFS/tumblr_lzizpkYfbA1r73upxo1_100_zps26566a4b.gif~c200');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pokemon');
};
