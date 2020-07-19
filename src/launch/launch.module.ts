import { Module } from '@nestjs/common';
import { LaunchService } from './launch.service';
import { LaunchResolver } from './launch.resolver';

@Module({
  providers: [LaunchService, LaunchResolver]
})
export class LaunchModule {}
