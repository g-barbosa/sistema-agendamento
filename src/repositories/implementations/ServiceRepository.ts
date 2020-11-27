import { Service } from '../../domain/models/Service'
import knex from '../../database/connection';
import { IServicesRepository } from "../IServicesRepository";

export class ServiceRepository implements IServicesRepository {

    async get(): Promise<Service[]> {
        const services : Service[] = await knex('services')

        return services
    }

    async getById(id: number): Promise<Service> {
        const service : Service = await knex('services').where('id', id).first()
        
        return service
    }

    async getByEntityId(id: string): Promise<Service> {
        const service : Service = await knex('services').where('entityId', id).first()

        return service
    }

    async create(service: Service): Promise<void> {

        await knex('services').insert(service)

    }

    async update(service: Service, id: string): Promise<void> {

        await knex('services').where('entityId', id).update({
            description: service.description,
            value: service.value,
        })
    }

    async delete(id: string): Promise<void> {

        await knex('services').where('entityId', id).del()

    }
}