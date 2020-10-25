import { IResolvers } from 'graphql-tools';

const mutation: IResolvers = {
    Mutation: {
        login(): string{
            return "login";
        }
    }
};

export default mutation;