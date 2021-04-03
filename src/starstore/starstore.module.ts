import { CacheModule, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BuySchema, HistorySchema, ProductSchema } from './schemas/starstore.schema';
import { ProductService, HistoryService, BuyService } from './shared/starstore.service';
import { StarstoreController } from './starstore.controller';
import { AuditMiddleware } from '../middlewares/audit.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}]),
    MongooseModule.forFeature([{name: 'History', schema: HistorySchema}]),
    MongooseModule.forFeature([{name: 'Buy', schema: BuySchema}]),
    CacheModule.register({
      ttl: 5, //seconds
      max: 100 //maximum number of itens in cache
    })
  ],
  controllers: [StarstoreController],
  providers: [ProductService, HistoryService, BuyService],
  exports: [ProductService,HistoryService,BuyService],
})

export class StarstoreModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuditMiddleware)
    .forRoutes({path:'starstore/*', method:RequestMethod.ALL});
  }
}
