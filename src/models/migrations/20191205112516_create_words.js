exports.up = function(knex) {
    return knex.schema.createTable('words', table => {
        table.increments()
        table.string('word').unique().notNullable()
        table.string('pron_dj_uk')
        table.string('pron_dj_us')
        table.string('pron_ipa_uk')
        table.string('pron_ipa_us')
        table.string('audio_uk')
        table.string('audio_us')
    })
}

exports.down = function(knex) {
     return knex.schema.dropTable('words')
}