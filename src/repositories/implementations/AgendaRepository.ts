import { Agenda } from '../../domain/models/Agenda'
import { ICreateAgendaRequestDTO } from '../../domain/DTO/AgendaDTO'
import knex from '../../database/connection';
import { IAgendaRepository } from '../IAgendaRepository';

export class AgendaRepository implements IAgendaRepository {

    async get(): Promise<Agenda[]> {

        const agendas: Agenda[] = await knex('scheduling')
        .select([
            'scheduling.entityId as id',
            'agenda.data as data',
            'customers.entityId as customerId',           
            'employees.name as employeeName',
            'customers.name as customerName',
            'products.description as product',
            'services.description as service'
        ])
        .innerJoin('agenda', 'agenda.id', 'scheduling.idAgenda')
        .innerJoin('products', 'products.id', 'scheduling.idProduto')
        .innerJoin('services', 'services.id', 'scheduling.idServicos')
        .innerJoin('employees', 'employees.id', 'agenda.employeeId')
        .innerJoin('customers', 'customers.id', 'agenda.customerId')

        return agendas
    }

    async getById(id: string): Promise<Agenda> {
        const agenda : Agenda = await knex('scheduling')
        .select([
            'scheduling.entityId as id',
            'agenda.data as data',
            'customers.entityId as customerId',           
            'employees.name as employeeName',
            'customers.name as customerName',
            'products.description as product',
            'services.description as service'
        ])
        .innerJoin('agenda', 'agenda.id', 'scheduling.idAgenda')
        .innerJoin('produtos', 'produtos.id', 'scheduling.idProduto')
        .innerJoin('services', 'services.id', 'scheduling.idServicos')
        .innerJoin('employees', 'employees.id', 'agenda.employeeId')
        .innerJoin('customers', 'customers.id', 'agenda.customerId')
        .where('scheduling.entityId', id).first()

        return agenda
    }

    async create(agenda: Agenda): Promise<number[]> {

        return await knex('agenda').returning('id').insert(agenda)
        
    }

    async update(agenda: ICreateAgendaRequestDTO, id: string): Promise<void> {

        await knex('agenda').where('entityId', id).update({
            data: agenda.data,
        })
    }

    async delete(id: string): Promise<void> {

        await knex('scheduling').where('entityId', id).del()

    }
}