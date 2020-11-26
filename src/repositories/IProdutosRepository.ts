import { Produto } from "../domain/models/Produto";

export interface IProdutosRepository {
    get(): Promise<Produto[]>;
    getById(id: number): Promise<Produto>;
    getByEntityId(id: string): Promise<Produto>;
    create(produto: Produto): Promise<void>;
    update(produtos: Produto, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}