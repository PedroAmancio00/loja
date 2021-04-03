import { Injectable } from '@nestjs/common';
import { Product } from './product';
import { History } from './history';
import { Buy } from './buy';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}


    async getAllProducts(){
        var v = await this.productModel.find({},{'_id': false, '__v': false}).exec()
        return v;
    }
    async createProduct(product: Product){
        const createdProduct = new this.productModel(product);
        var a = await createdProduct.save();
        return await this.productModel.findOne({"_id":a.id},{'_id': false, '__v': false}).exec();
    }

}


@Injectable()
export class HistoryService{
    constructor(@InjectModel('History') private readonly historyModel: Model <History>){}

    async getAllHistory(){
        var v = await this.historyModel.find({},{'_id': false, '__v': false}).exec()
        return v;
    }
    async getByIdHistory(id: string){
        var v = await this.historyModel.find({"client_id":id},{'_id': false, '__v': false}).exec()
        return v;
    }

}


@Injectable()
export class BuyService{
    constructor(@InjectModel('Buy') private readonly buyModel: Model <Buy>){}

    async createBuy(buy: Buy){
        const createdBuy = new this.buyModel(buy);
        var a = await createdBuy.save();
        return await this.buyModel.findOne({"_id":a.id},{'_id': false, '__v': false}).exec();
    }
}

