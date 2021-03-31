import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarstoreService } from './starstore/shared/starstore.service';
import { StarstoreController } from './starstore/starstore.controller';

@Module({
  imports: [],
  controllers: [AppController, StarstoreController],
  providers: [AppService, StarstoreService],
})
export class AppModule {}
