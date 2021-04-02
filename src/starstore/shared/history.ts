import { Document } from 'mongoose';

export class History extends Document{
    client_id: string
    purchase_id: string
    value: number
    date: string
    card_number: string
}
