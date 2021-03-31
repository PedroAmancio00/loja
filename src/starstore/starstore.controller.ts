import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { Product } from './shared/product';
import { History } from './shared/history';
import { StarstoreService } from './shared/starstore.service';
import { get } from 'node:http';
import { Buy } from './shared/buy';

@Controller('starstore')
export class StarstoreController {
    
    

    constructor(
        private starstoreService: StarstoreService
    ){}

    

    @Get('products')
    async getAllProducts(): Promise<Product[]>{
        return this.starstoreService.getAllProducts();
    }

    @Get('history')
    async getAllHistory(): Promise<History[]>{
        return this.starstoreService.getAllHistory();
    }
    
    @Get('history/:id')
    async getByIdHistory(@Param('id') id: string) : Promise<History[]>{
        return this.starstoreService.getByIdHistory(id);
    }

    @Post('products')
    async createProduct(@Body() product: Product):Promise<Product>{
        return this.starstoreService.createProduct(product);
    }

    @Post('buy')
    async createBuy(@Body() buy: Buy):Promise<Buy>{
        return this.starstoreService.createBuy(buy);
    }
}
