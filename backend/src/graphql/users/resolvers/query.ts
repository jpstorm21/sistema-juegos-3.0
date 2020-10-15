import { IResolvers } from 'graphql-tools';

const query : IResolvers = {
    Query: {
        users(): string {
            return "usuarios";
        }
    }
}

export default query;