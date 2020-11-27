import { Customer } from "../domain/models/Customer";

export interface IClienteRepository {
    get(): Promise<Customer[]>;
    getById(id: string): Promise<Customer>;
    create(cliente: Customer): Promise<void>;
    update(cliente: Customer, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}