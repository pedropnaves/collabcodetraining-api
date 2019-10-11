import { Module } from '@nestjs/common';
import { MorganModule } from 'nest-morgan';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [
    MorganModule.forRoot(),
    WinstonModule.forRoot({
      format: winston.format.json(),
      transports: new winston.transports.Console(),
    }),
  ],
})
export class CoreModule {}
