import { Cliente } from "../domain/models/Cliente";

export interface IClienteRepository {
    get(): Promise<Cliente[]>;
    getById(id: string): Promise<Cliente>;
    create(cliente: Cliente): Promise<void>;
    update(cliente: Cliente, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}