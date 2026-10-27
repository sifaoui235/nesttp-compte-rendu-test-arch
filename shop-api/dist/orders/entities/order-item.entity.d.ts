import type { Relation } from 'typeorm';
import { CustomerOrder } from './order.entity.js';
import { Product } from '../../products/entities/product.entity.js';
export declare class OrderItem {
    id: number;
    quantity: number;
    unitPrice: string;
    order: Relation<CustomerOrder>;
    orderId: number;
    product: Relation<Product>;
    productId: number;
}
