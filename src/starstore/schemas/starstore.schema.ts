import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    zipcode: String,
    seller: String,
    thumbnailHd: String,
    date: String
})

export const HistorySchema = new mongoose.Schema({
    client_id: String,
    purchase_id: String,
    value: Number,
    date: String,
    card_number: String
})

export const Credit_cardSchema = new mongoose.Schema({
    _id: false,
    card_number: Number,
    value: Number,
    cvv: Number,
    card_holder_name: String,
    exp_date: String
})

export const BuySchema = new mongoose.Schema({
    client_id: String,
    client_name: String,
    total_to_pay: Number,
    credit_card: Credit_cardSchema
})

