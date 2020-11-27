import { Service } from '../../domain/models/Service'
import knex from '../../database/connection';
import { IServicosRepository } from "../IServicesRepository";

export class ServicosRepository implements IServicosRepository {

    async get(): Promise<Service[]> {
        const servicos : Service[] = await knex('servicos')

        return servicos
    }

    async getById(id: number): Promise<Service> {
        const servico : Service = await knex('servicos').where('id', id).first()
        
        return servico
    }

    async getByEntityId(id: string): Promise<Service> {
        const servico : Service = await knex('servicos').where('entityId', id).first()

        return servico
    }

    async create(servico: Service): Promise<void> {

        await knex('servicos').insert(servico)

    }

    async update(servico: Service, id: string): Promise<void> {

        await knex('servicos').where('entityId', id).update({
            description: servico.description,
            value: servico.value,
        })
    }

    async delete(id: string): Promise<void> {

        await knex('servicos').where('entityId', id).del()

    }
}