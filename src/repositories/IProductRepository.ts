import { Product } from "../domain/models/Product";

export interface IProductRepository {
    get(): Promise<Product[]>;
    getById(id: number): Promise<Product>;
    getByEntityId(id: string): Promise<Product>;
    create(product: Product): Promise<void>;
    update(product: Product, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}