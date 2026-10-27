import { Repository } from 'typeorm';
import { Category } from './entities/category.entity.js';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';
export declare class CategoriesService {
    private readonly repo;
    constructor(repo: Repository<Category>);
    create(dto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    update(id: number, dto: UpdateCategoryDto): Promise<{
        name: string;
        id: number;
        products: import("../products/entities/product.entity.js").Product[];
    } & Category>;
    remove(id: number): Promise<Category>;
}
