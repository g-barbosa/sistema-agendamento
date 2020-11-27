import { Scheduling } from '../../domain/models/Scheduling'
import knex from '../../database/connection';
import { ISchedulingRepository } from '../ISchedulingRepository';

export class SchedulingRepository implements ISchedulingRepository {

    async get(): Promise<Scheduling[]> {
        
        return await knex('agendamento')
    }

    async create(agendamento: Scheduling): Promise<number[]> {

        return await knex('agendamento').insert(agendamento)
        
    }

    async delete(id: string): Promise<void> {

        await knex('agendamento').where('entityId', id).del()

    }
}