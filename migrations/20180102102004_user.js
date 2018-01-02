
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user', (table) => {
      table.increments()
      table.string('name')
      table.string('username')
      table.string('password')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user')
  ])
};
