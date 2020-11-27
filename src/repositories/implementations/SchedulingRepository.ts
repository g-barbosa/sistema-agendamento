import { Scheduling } from '../../domain/models/Scheduling'
import knex from '../../database/connection';
import { ISchedulingRepository } from '../ISchedulingRepository';

export class SchedulingRepository implements ISchedulingRepository {

    async get(): Promise<Scheduling[]> {
        
        return await knex('scheduling')
    }

    async create(scheduling: Scheduling): Promise<number[]> {

        return await knex('scheduling').insert(scheduling)
        
    }

    async delete(id: string): Promise<void> {

        await knex('scheduling').where('entityId', id).del()

    }
}