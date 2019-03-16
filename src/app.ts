import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';
import SpaceXAPI from './RESTAPI';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ api: new SpaceXAPI() }),
  introspection: true,
  playground: {
    settings: {
      'editor.theme': 'light',
    },
  },
});

server.applyMiddleware({ app });

export default app;
