import { Client } from '../../clients/entities/client.entity.js';
import { OrderItem } from './order-item.entity.js';
export declare class CustomerOrder {
    id: number;
    status: string;
    total: string;
    createdAt: Date;
    client: Client;
    clientId: number;
    items: OrderItem[];
}
