import { CustomerOrder } from '../../orders/entities/order.entity.js';
export declare class Client {
    id: number;
    fullName: string;
    email: string;
    orders: CustomerOrder[];
}
