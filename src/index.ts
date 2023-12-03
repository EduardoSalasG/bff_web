import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
const app = express();
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;


const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
        books: () => books,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,

});

await server.start();
app.use('/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server));

app.listen({ port: 4000 }, () => {
    console.log(`🚀  Server ready at: http://localhost:4000/graphql`);
});