import { Resolver, Query, Context } from '@nestjs/graphql';
import { DadJokeDataSource } from './dad-joke.datasource';
import { Context as ServerContext } from 'apollo-server-core';

@Resolver('DadJoke')
export class DadJokeResolver {
    constructor() {}

    @Query()
    dadJoke(@Context('dataSources')
    { dadJokeDataSource }: ServerContext <{ dadJokeDataSource: DadJokeDataSource }>) {
        return dadJokeDataSource.getRandomJoke();
    }
}
