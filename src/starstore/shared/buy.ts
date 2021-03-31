export class Buy {
    client_id: string;
   client_name: string;
   total_to_pay: number;
   credit_card: Credit_card;
};

class Credit_card{
    card_number: number;
    value: number;
    cvv: number;
    card_holder_name: string;
    exp_date: string
}