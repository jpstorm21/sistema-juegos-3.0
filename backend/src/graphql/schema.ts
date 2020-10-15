import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import deepmerge from "deepmerge";
import users from './users';
import games from './games';

const typeDefs = [
    users.schema,
    games.schema
];

const resolvers: any = deepmerge.all([
    users.resolvers,
    games.resolvers
]);

const resolverValidationOptions = {
    requireResolversForResolveType: false,
};

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions,
});


export default schema;