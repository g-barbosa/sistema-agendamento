import { IClienteRepository } from '../repositories/IClienteRepository'
import { ICreateCustomerRequestDTO } from '../domain/DTO/CustomersDTO';
import { Cliente } from '../domain/models/Cliente';

export class CustomersService {
    
    constructor ( 
        private clienteRepository: IClienteRepository
        ){}

    async create(ClienteData: ICreateCustomerRequestDTO) {

        const cliente = new Cliente(ClienteData);

        await this.clienteRepository.create(cliente);
    }

    async getAll() {
        const cliente: Cliente[] = await this.clienteRepository.get()

        return cliente
    }

    async getById(id: string) {
        const cliente: Cliente = await this.clienteRepository.getById(id)

        return cliente
    }

    async update(ClienteData: ICreateCustomerRequestDTO, id: string) {
        const clienteAlreadyExists = await this.clienteRepository.getById(id);

        if (!clienteAlreadyExists) throw new Error('cliente não encontrado.');

        const cliente = new Cliente(ClienteData);

        await this.clienteRepository.update(cliente, id);
    }

    async delete(id: string) {
        const clienteAlreadyExists = await this.clienteRepository.getById(id);

        if (!clienteAlreadyExists) throw new Error('cliente não encontrado.');

        await this.clienteRepository.delete(id);
    }
}
