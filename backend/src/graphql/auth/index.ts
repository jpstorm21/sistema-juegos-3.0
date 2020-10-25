import { IResolvers } from 'graphql-tools';
import query from './resolvers/query';
import mutation from './resolvers/mutation';
import fs from "fs";

const schema: string = fs.readFileSync(__dirname + '/schema.graphql', 'utf8');

const resolvers : IResolvers = {
    ...query,
    ...mutation
}

export default {
    schema,
    resolvers,
};
  