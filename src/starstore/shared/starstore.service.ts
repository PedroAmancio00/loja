import { Injectable } from '@nestjs/common';
import { Product } from './product';
import { History } from './history';
import { Buy } from './buy';

@Injectable()
export class StarstoreService {
    products: Product[] = [
        {
            title: "Blusa do Imperio",
            price: 7990,
            zipcode: "78993-000",
            seller: "João da Silva",
            thumbnailHd: "https://cdn.awsli.com.br/600x450/21/21351/produto/3853007/f66e8c63ab.jpg",
            date: "26/11/2015"
        },
        {
            title: "Blusa Han Shot First",
            price: 7990,
            zipcode: "13500-110",
            seller: "Joana",
            thumbnailHd: "https://cdn.awsli.com.br/1000x1000/21/21351/produto/7234148/55692a941d.jpg",
            date: "26/11/2015"
        },
        {
            title: "Sabre de luz",
            price: 150000,
            zipcode: "13537-000",
            seller: "Mario Mota",
            thumbnailHd: "http://www.obrigadopelospeixes.com/wp-content/uploads/2015/12/kalippe_lightsaber_by_jnetrocks-d4dyzpo1-1024x600.jpg",
            date: "20/11/2015"
        }
    ];

    history: History[] = [
        {
            client_id:"7e655c6e-e8e5-4349-8348-e51e0ff3072e",
            purchase_id:"569c30dc-6bdb-407a-b18b-3794f9b206a8",
            value:1234,
            date:"19/08/2016",
            card_number:"**** **** **** 1234"
        },
        {
            client_id:"7e655c6e-e8e5-4349-8348-e51e0ff3072e",
            purchase_id:"569c30dc-6bdb-407a-b18b-3794f9b206a8",
            value:1234,
            date:"19/08/2016",
            card_number:"**** **** **** 1234"
        },
        {
            client_id:"7e655c6e-e8e5-4349-8348-e51e0ff3072e",
            purchase_id:"569c30dc-6bdb-407a-b18b-3794f9b206a8",
            value:1234,
            date:"19/08/2016",
            card_number:"**** **** **** 1234"
        }
    ]

    buys: Buy[] = []

    getAllProducts(){
        return this.products;
    }

    getAllHistory(){
        return this.history;
    }

    getByIdHistory(id: string){
        var history = this.history.filter((value) => value.client_id == id);
        return history;
    }

    createProduct(product: Product){
        this.products.push(product);
        return product;
    }

    createBuy(buy: Buy){
        this.buys.push(buy);
        return buy;
    }
}
