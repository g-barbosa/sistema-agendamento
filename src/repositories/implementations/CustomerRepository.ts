import { Customer } from '../../domain/models/Customer'
import knex from '../../database/connection';
import { ICustomerRepository } from '../ICustomerRepository';

export class CustomerRepository implements ICustomerRepository {

    async get(): Promise<Customer[]> {
        const customers : Customer[] = await knex('customers')

        return customers
    }

    async getById(id: string): Promise<Customer> {
        const customer : Customer = await knex('customers').where('entityId', id).first()

        return customer
    }

    async create(customer: Customer): Promise<void> {

        await knex('customers').insert(customer)

    }

    async update(customer: Customer, id: string): Promise<void> {

        await knex('customers').where('entityId', id).update({
            name: customer.name,
            phone: customer.phone,
            login: customer.login,
            password: customer.password
        })
    }

    async delete(id: string): Promise<void> {

        await knex('customers').where('entityId', id).del()

    }
}