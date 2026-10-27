import { Repository } from 'typeorm';
import { Client } from './entities/client.entity.js';
import { CreateClientDto } from './dto/create-client.dto.js';
import { UpdateClientDto } from './dto/update-client.dto.js';
export declare class ClientsService {
    private readonly repo;
    constructor(repo: Repository<Client>);
    create(dto: CreateClientDto): Promise<Client>;
    findAll(): Promise<Client[]>;
    findOne(id: number): Promise<Client>;
    update(id: number, dto: UpdateClientDto): Promise<{
        fullName: string;
        email: string;
        id: number;
        orders: import("../orders/entities/order.entity.js").CustomerOrder[];
    } & Client>;
    remove(id: number): Promise<Client>;
}
