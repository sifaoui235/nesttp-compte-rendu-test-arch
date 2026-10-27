import { CategoriesService } from './categories.service.js';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(dto: CreateCategoryDto): Promise<import("./entities/category.entity.js").Category>;
    findAll(): Promise<import("./entities/category.entity.js").Category[]>;
    findOne(id: number): Promise<import("./entities/category.entity.js").Category>;
    update(id: number, dto: UpdateCategoryDto): Promise<{
        name: string;
        id: number;
        products: import("../products/entities/product.entity.js").Product[];
    } & import("./entities/category.entity.js").Category>;
    remove(id: number): Promise<import("./entities/category.entity.js").Category>;
}
