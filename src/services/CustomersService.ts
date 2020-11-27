import { ICustomerRepository } from '../repositories/ICustomerRepository'
import { ICreateCustomerRequestDTO } from '../domain/DTO/CustomersDTO';
import { Customer } from '../domain/models/Customer';

export class CustomersService {
    
    constructor ( 
        private customerRepository: ICustomerRepository
        ){}

    async create(customerData: ICreateCustomerRequestDTO) {

        const customer = new Customer(customerData);

        await this.customerRepository.create(customer);
    }

    async getAll() {
        const customer: Customer[] = await this.customerRepository.get()

        return customer
    }

    async getById(id: string) {
        const customer: Customer = await this.customerRepository.getById(id)

        return customer
    }

    async update(customerData: ICreateCustomerRequestDTO, id: string) {
        const customerAlreadyExists = await this.customerRepository.getById(id);

        if (!customerAlreadyExists) throw new Error('customer não encontrado.');

        const customer = new Customer(customerData);

        await this.customerRepository.update(customer, id);
    }

    async delete(id: string) {
        const customerAlreadyExists = await this.customerRepository.getById(id);

        if (!customerAlreadyExists) throw new Error('customer não encontrado.');

        await this.customerRepository.delete(id);
    }
}
