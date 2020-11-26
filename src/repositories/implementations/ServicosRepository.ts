import { Servico } from '../../domain/models/Servico'
import knex from '../../database/connection';
import { IServicosRepository } from "../IServicosRepository";

export class ServicosRepository implements IServicosRepository {

    async get(): Promise<Servico[]> {
        const servicos : Servico[] = await knex('servicos')

        return servicos
    }

    async getById(id: number): Promise<Servico> {
        const servico : Servico = await knex('servicos').where('id', id).first()
        
        return servico
    }

    async getByEntityId(id: string): Promise<Servico> {
        const servico : Servico = await knex('servicos').where('entityId', id).first()

        return servico
    }

    async create(servico: Servico): Promise<void> {

        await knex('servicos').insert(servico)

    }

    async update(servico: Servico, id: string): Promise<void> {

        await knex('servicos').where('entityId', id).update({
            description: servico.description,
            value: servico.value,
        })
    }

    async delete(id: string): Promise<void> {

        await knex('servicos').where('entityId', id).del()

    }
}