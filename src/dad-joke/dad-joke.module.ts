import { Module } from '@nestjs/common';
import { DadJokeResolver } from './dad-joke.resolver';
import { DadJokeDataSource } from './dad-joke.datasource';

@Module({
  providers: [DadJokeResolver, DadJokeDataSource]
})
export class DadJokeModule {}
