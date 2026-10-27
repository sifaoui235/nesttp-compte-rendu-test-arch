import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto.js';

@Injectable()
export class OrdersService {
    create(dto: CreateOrderDto) {
        throw new Error('Method not implemented.');
    }
    findOne(id: number) {
        throw new Error('Method not implemented.');
    }
    remove(id: number) {
        throw new Error('Method not implemented.');
    }
}
