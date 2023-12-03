import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers.js';

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: false,
});

await server.start();
app.use('/graphql',
    cors<cors.CorsRequest>({ origin: ['http://localhost:4000/', 'http://localhost:8080', 'http://localhost:8080/tipo_usuarios/', 'https://studio.apollographql.com'] }),
    express.json(),
    expressMiddleware(server));

app.listen({ port: 4000 }, () => {
    console.log(`🚀  Server ready at: http://localhost:4000/graphql`);
});