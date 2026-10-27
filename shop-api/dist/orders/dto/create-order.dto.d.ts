export declare class CreateOrderItemDto {
    productId: number;
    quantity: number;
}
export declare class CreateOrderDto {
    clientId: number;
    items: CreateOrderItemDto[];
}
