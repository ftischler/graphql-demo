import * as express from 'express';
import * as bodyParser from 'body-parser';

import { Application } from 'express';
import { join } from 'path';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

const port: string | number = process.env.PORT || 3000;

const app: Application = express();

app.use('/', express.static(join(__dirname, '..', 'dist')));

const typeDefs = [`
type Query {
  hello: String
}

schema {
  query: Query
}`];

const resolvers = {
  Query: {
    hello(root) {
      return 'world';
    }
  }
};

const schema = makeExecutableSchema({typeDefs, resolvers});

app.use('/api', bodyParser.json(), graphqlExpress({schema}));
app.use('/api', graphiqlExpress({endpointURL: '/api'}));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
