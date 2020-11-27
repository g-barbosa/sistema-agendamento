import { IServicesRepository } from '../repositories/IServicesRepository'
import { ICreateServiceRequestDTO } from '../domain/DTO/ServicesDTO';
import { Service } from '../domain/models/Service';

export class ServicesService {
    
    constructor ( 
        private servicesRepository: IServicesRepository
        ){}

    async create(serviceData: ICreateServiceRequestDTO) {

        const service = new Service(serviceData);

        await this.servicesRepository.create(service);
    }

    async getAll() {
        const services: Service[] = await this.servicesRepository.get()

        return services
    }

    async getById(id: string) {
        const service: Service = await this.servicesRepository.getByEntityId(id)

        return service
    }

    async update(serviceData: ICreateServiceRequestDTO, id: string) {
        const serviceAlreadyExists = await this.servicesRepository.getByEntityId(id);

        if (!serviceAlreadyExists) throw new Error('Serviço não encontrado.');

        const service = new Service(serviceData);

        await this.servicesRepository.update(service, id);
    }

    async delete(id: string) {
        const serviceAlreadyExists = await this.servicesRepository.getByEntityId(id);

        if (!serviceAlreadyExists) throw new Error('Serviço não encontrado.');

        await this.servicesRepository.delete(id);
    }
}
