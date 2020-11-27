import { IServicosRepository } from '../repositories/IServicesRepository'
import { ICreateServiceRequestDTO } from '../domain/DTO/ServicesDTO';
import { Service } from '../domain/models/Service';

export class ServicesService {
    
    constructor ( 
        private servicosRepository: IServicosRepository
        ){}

    async create(serviceData: ICreateServiceRequestDTO) {

        const servico = new Service(serviceData);

        await this.servicosRepository.create(servico);
    }

    async getAll() {
        const servicos: Service[] = await this.servicosRepository.get()

        return servicos
    }

    async getById(id: string) {
        const servico: Service = await this.servicosRepository.getByEntityId(id)

        return servico
    }

    async update(serviceData: ICreateServiceRequestDTO, id: string) {
        const serviceAlreadyExists = await this.servicosRepository.getByEntityId(id);

        if (!serviceAlreadyExists) throw new Error('Serviço não encontrado.');

        const servico = new Service(serviceData);

        await this.servicosRepository.update(servico, id);
    }

    async delete(id: string) {
        const serviceAlreadyExists = await this.servicosRepository.getByEntityId(id);

        if (!serviceAlreadyExists) throw new Error('Serviço não encontrado.');

        await this.servicosRepository.delete(id);
    }
}
