
exports.up = knex => knex.schema.createTable('posts', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .text('text')
    .notNullable()

  table.uuid('ownerId')
    .notNullable()
    .references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table
    .integer('likes')
    .defaultTo(0)

  table.timestamps(true)
})

exports.down = knex => knex.schema.dropTableIfExists('posts')
