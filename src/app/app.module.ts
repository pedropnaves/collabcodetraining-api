import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { ApiModule } from './api/api.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    CoreModule,
    ConfigModule,
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
