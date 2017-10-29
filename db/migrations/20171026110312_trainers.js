
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trainers', (table) => {
    table.increments();
    table.string('name');
    table.string('image_url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trainers');
};
