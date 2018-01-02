
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('resolutions', (table) => {
      table.increments()
      table.text('resolution')
      table.integer('user_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('resolutions')
  ])
};
