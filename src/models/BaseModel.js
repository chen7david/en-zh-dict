const knexfile = require('./../../knexfile').development
const Knex = require('knex')(knexfile)
const pluralize =  require('pluralize')
const { Model } = require('objection')
const { DBErrors } = require('objection-db-errors')
Model.knex(Knex)

class BaseModel extends DBErrors(Model) {
    
    static get tableName() {
        return pluralize(this.name.toLowerCase())
    }

    static get modelPaths() {
        return [__dirname]
    }
}

module.exports = BaseModel