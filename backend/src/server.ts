import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import schema from './graphql/schema';
import expressPlayGround from 'graphql-playground-middleware-express';

const app = express();

app.use('*', cors());
app.use(compression());
app.use(express.json());

const server = new ApolloServer({
  schema,
  introspection: true
});

server.applyMiddleware({ app });
app.get('/', expressPlayGround({
  endpoint: '/graphql'
}));

const httpServer = createServer(app);

const PORT = process.env.PORT || 5000;

httpServer.listen(
  {
    port: PORT
  },
  () => console.log(`Server online in http://localhost:${PORT}`)
);