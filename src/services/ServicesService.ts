import { IServicosRepository } from '../repositories/IServicosRepository'
import { ICreateServiceRequestDTO } from '../domain/DTO/ServicesDTO';
import { Servico } from '../domain/models/Servico';

export class ServicesService {
    
    constructor ( 
        private servicosRepository: IServicosRepository
        ){}

    async create(serviceData: ICreateServiceRequestDTO) {

        const servico = new Servico(serviceData);

        await this.servicosRepository.create(servico);
    }

    async getAll() {
        const servicos: Servico[] = await this.servicosRepository.get()

        return servicos
    }

    async getById(id: string) {
        const servico: Servico = await this.servicosRepository.getByEntityId(id)

        return servico
    }

    async update(serviceData: ICreateServiceRequestDTO, id: string) {
        const serviceAlreadyExists = await this.servicosRepository.getByEntityId(id);

        if (!serviceAlreadyExists) throw new Error('Serviço não encontrado.');

        const servico = new Servico(serviceData);

        await this.servicosRepository.update(servico, id);
    }

    async delete(id: string) {
        const serviceAlreadyExists = await this.servicosRepository.getByEntityId(id);

        if (!serviceAlreadyExists) throw new Error('Serviço não encontrado.');

        await this.servicosRepository.delete(id);
    }
}
