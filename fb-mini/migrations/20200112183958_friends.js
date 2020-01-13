
exports.up = knex => knex.schema.createTable('friends', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('requestorId')
    .notNullable()
    .references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table
    .uuid('requestedId')
    .notNullable()
    .references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table
    .enum('status', [
      'REQUESTED',
      'ACCEPTED',
      'DECLINED',
    ])
    .defaultTo('REQUESTED')

  table.timestamps(true)
})

exports.down = knex => knex.schema.dropTableIfExists('friends')
