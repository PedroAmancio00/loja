import { Document } from 'mongoose';

export class Product extends Document{
    title: string
    price: number
    zipcode: string
    seller: string
    thumbnailHd: string
    date: string
}
