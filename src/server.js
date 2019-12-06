const { Word } = require('./models')
const { ApolloServer, gql } = require('apollo-server')
const { PORT } = require('./config')
const { words } = require('./graphql')

const typeDefs = gql`
    type Query
    type Mutation
`
const server = new ApolloServer({
    cors:{
        origen: '*',
        credentials: true
    },
    typeDefs: [
        typeDefs, 
        words.typeDefs, 
    ],
    resolvers: [
        words.resolvers, 
    ]
})
server.listen(PORT).then(({url}) => {
    console.log(`server running at ${url}`)
})

