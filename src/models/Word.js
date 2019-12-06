const BaseModel = require('./BaseModel')

class Word extends BaseModel {

    static get relationMappings(){
        
        const Definition = require('./Definition')

        return {
            definitions:{
                relation: BaseModel.HasManyRelation,
                modelClass: Definition,
                join:{
                    from:'words.id',
                    to:'definitions.word_id'
                }
            }
        }
    }
}

module.exports = Word