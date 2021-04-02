import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BuySchema, HistorySchema, ProductSchema } from './schemas/starstore.schema';
import { ProductService, HistoryService, BuyService } from './shared/starstore.service';
import { StarstoreController } from './starstore.controller';


@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}]),
    MongooseModule.forFeature([{name: 'History', schema: HistorySchema}]),
    MongooseModule.forFeature([{name: 'Buy', schema: BuySchema}]),
  ],
  controllers: [StarstoreController],
  providers: [ProductService, HistoryService, BuyService],
  exports: [ProductService,HistoryService,BuyService],
})
export class StarstoreModule { }
