import { Cliente } from '../../domain/models/Cliente'
import knex from '../../database/connection';
import { IClienteRepository } from '../IClienteRepository';

export class ClienteRepository implements IClienteRepository {

    async get(): Promise<Cliente[]> {
        const clientes : Cliente[] = await knex('clientes')

        return clientes
    }

    async getById(id: string): Promise<Cliente> {
        const cliente : Cliente = await knex('clientes').where('entityId', id).first()

        return cliente
    }

    async create(cliente: Cliente): Promise<void> {

        await knex('clientes').insert(cliente)

    }

    async update(cliente: Cliente, id: string): Promise<void> {

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