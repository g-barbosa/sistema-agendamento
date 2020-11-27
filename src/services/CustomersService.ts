import { ICustomerRepository } from '../repositories/ICustomerRepository'
import { ICreateCustomerRequestDTO } from '../domain/DTO/CustomersDTO';
import { Customer } from '../domain/models/Customer';

export class CustomersService {
    
    constructor ( 
        private clienteRepository: ICustomerRepository
        ){}

    async create(ClienteData: ICreateCustomerRequestDTO) {

        const cliente = new Customer(ClienteData);

        await this.clienteRepository.create(cliente);
    }

    async getAll() {
        const cliente: Customer[] = await this.clienteRepository.get()

        return cliente
    }

    async getById(id: string) {
        const cliente: Customer = await this.clienteRepository.getById(id)

        return cliente
    }

    async update(ClienteData: ICreateCustomerRequestDTO, id: string) {
        const clienteAlreadyExists = await this.clienteRepository.getById(id);

        if (!clienteAlreadyExists) throw new Error('cliente não encontrado.');

        const cliente = new Customer(ClienteData);

        await this.clienteRepository.update(cliente, id);
    }

    async delete(id: string) {
        const clienteAlreadyExists = await this.clienteRepository.getById(id);

        if (!clienteAlreadyExists) throw new Error('cliente não encontrado.');

        await this.clienteRepository.delete(id);
    }
}
