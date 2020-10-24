import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { LaunchModule } from './launch/launch.module';
import { DadJokeModule } from './dad-joke/dad-joke.module';
import { DadJokeDataSource } from './dad-joke/dad-joke.datasource';

@Module({
  imports: [
    GraphQLModule.forRoot({
      dataSources: () => {
        return {
          dadJokeDataSource: new DadJokeDataSource()
        }
      },
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    LaunchModule,
    DadJokeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
