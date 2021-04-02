import { Body, Controller, Get, Param, Post, Render, UseGuards } from '@nestjs/common';
import { Product } from './shared/product';
import { History } from './shared/history';
import { HistoryService, ProductService, BuyService } from './shared/starstore.service';
import { Buy } from './shared/buy';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('starstore')
export class StarstoreController {
    
    

    constructor(
        private productService: ProductService,
        private historyService: HistoryService,
        private buyService: BuyService
    ){}

    
    @UseGuards(JwtAuthGuard)
    @Get('products')
    async getAllProducts(): Promise<Product[]>{
        return this.productService.getAllProducts();
    }

    @UseGuards(JwtAuthGuard)
    @Get('history')
    async getAllHistory(): Promise<History[]>{
        return this.historyService.getAllHistory();
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('history/:id')
    async getByIdHistory(@Param('id') id: string) : Promise<History[]>{
        return this.historyService.getByIdHistory(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('product')
    async createProduct(@Body() product: Product):Promise<Product>{
        return this.productService.createProduct(product);
    }

    @UseGuards(JwtAuthGuard)
    @Post('buy')
    async createBuy(@Body() buy: Buy):Promise<Buy>{
        return this.buyService.createBuy(buy);
    }
}
