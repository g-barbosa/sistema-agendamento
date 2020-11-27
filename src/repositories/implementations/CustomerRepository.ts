import { Customer } from '../../domain/models/Customer'
import knex from '../../database/connection';
import { ICustomerRepository } from '../ICustomerRepository';

export class CustomerRepository implements ICustomerRepository {

    async get(): Promise<Customer[]> {
        const clientes : Customer[] = await knex('clientes')

        return clientes
    }

    async getById(id: string): Promise<Customer> {
        const cliente : Customer = await knex('clientes').where('entityId', id).first()

        return cliente
    }

    async create(cliente: Customer): Promise<void> {

        await knex('clientes').insert(cliente)

    }

    async update(cliente: Customer, id: string): Promise<void> {

        await knex('clientes').where('entityId', id).update({
            name: cliente.name,
            phone: cliente.phone,
            login: cliente.login,
            password: cliente.password
        })
    }

    async delete(id: string): Promise<void> {

        await knex('clientes').where('entityId', id).del()

    }
}