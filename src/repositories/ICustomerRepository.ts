import { Customer } from "../domain/models/Customer";

export interface ICustomerRepository {
    get(): Promise<Customer[]>;
    getById(id: string): Promise<Customer>;
    create(customer: Customer): Promise<void>;
    update(customer: Customer, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}