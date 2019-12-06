exports.up = function(knex) {
    return knex.schema.createTable('definitions', table => {
        table.increments()
        table.string('pos')
        table.string('definition').notNullable()
        table.integer('lang_id')
        table.integer('word_id').references('id').inTable('words').onDelete('CASCADE').index()
    })
}

exports.down = function(knex) {
     return knex.schema.dropTable('definitions')
}