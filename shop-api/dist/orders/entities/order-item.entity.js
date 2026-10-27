var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, } from 'typeorm';
import { CustomerOrder } from './order.entity.js';
import { Product } from '../../products/entities/product.entity.js';
let OrderItem = class OrderItem {
    id;
    quantity;
    unitPrice;
    order;
    orderId;
    product;
    productId;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], OrderItem.prototype, "id", void 0);
__decorate([
    Column('int'),
    __metadata("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    Column('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", String)
], OrderItem.prototype, "unitPrice", void 0);
__decorate([
    ManyToOne(() => CustomerOrder, (o) => o.items, { onDelete: 'CASCADE' }),
    JoinColumn({ name: 'orderId' }),
    __metadata("design:type", Object)
], OrderItem.prototype, "order", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], OrderItem.prototype, "orderId", void 0);
__decorate([
    ManyToOne(() => Product, (p) => p.items, { onDelete: 'RESTRICT' }),
    JoinColumn({ name: 'productId' }),
    __metadata("design:type", Object)
], OrderItem.prototype, "product", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], OrderItem.prototype, "productId", void 0);
OrderItem = __decorate([
    Entity('order_items')
], OrderItem);
export { OrderItem };
//# sourceMappingURL=order-item.entity.js.map