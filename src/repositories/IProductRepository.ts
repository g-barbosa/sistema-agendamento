import { Product } from "../domain/models/Product";

export interface IProdutosRepository {
    get(): Promise<Product[]>;
    getById(id: number): Promise<Product>;
    getByEntityId(id: string): Promise<Product>;
    create(produto: Product): Promise<void>;
    update(produtos: Product, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}