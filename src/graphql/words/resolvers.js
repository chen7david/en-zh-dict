const { Word } = require('../../models')

const resolvers = {
    Query: {
        // Mutations go here ...
        lookUp: async (_, args) => {
            const word = await Word.query().where('word', args.word).first()
            return word
        }
    },

    Mutation: {
        // Mutations go here ...
        lookUp: async (_, args) => {
            console.log('args', args)
            const word = await Word.query().where('word', args.word).first()
            return word
        }
    },
    Word: {
        en_definitions: async (parent, args) => {
            return await parent.$relatedQuery('definitions').where('lang_id',1)
        },
        cn_definitions: async (parent, args) => {
            return await parent.$relatedQuery('definitions').where('lang_id',2)
        }
    }
}

module.exports = {
    resolvers
}