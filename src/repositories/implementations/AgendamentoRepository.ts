import { Agendamento } from '../../domain/models/Agendamento'
import knex from '../../database/connection';
import { IAgendamentoRepository } from '../IAgendamentoRepository';

export class AgendamentoRepository implements IAgendamentoRepository {

    async get(): Promise<Agendamento[]> {
        
        return await knex('agendamento')
    }

    async create(agendamento: Agendamento): Promise<number[]> {

        return await knex('agendamento').insert(agendamento)
        
    }

    async delete(id: string): Promise<void> {

        await knex('agendamento').where('entityId', id).del()

    }
}