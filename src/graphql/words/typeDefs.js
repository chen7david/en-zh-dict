const { gql } = require('apollo-server')

const typeDefs = gql`
    type Word {
        id: Int!
        word: String!
        pron_dj_uk: String!
        pron_dj_us: String!
        audio_uk: String!
        audio_us: String!
        en_definitions: [Definition]!
        cn_definitions: [Definition]!
    }

    type Definition {
        pos: String!
        definition: String!
    }

    extend type Query {
        lookUp(word: String!): Word
    }
    
    extend type Mutation {
        lookUp(word: String!): Word
    }
`
module.exports = {
    typeDefs
}