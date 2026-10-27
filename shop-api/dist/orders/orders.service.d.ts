import { CreateOrderDto } from './dto/create-order.dto.js';
export declare class OrdersService {
    create(dto: CreateOrderDto): void;
    findOne(id: number): void;
    remove(id: number): void;
}
