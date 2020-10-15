import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query: {
        games(): string {
            return "juegos";
        }
    }
};

export default query;