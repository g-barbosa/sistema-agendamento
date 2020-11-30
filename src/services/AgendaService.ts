import { IAgendaRepository } from '../repositories/IAgendaRepository'
import { ICustomerRepository } from '../repositories/ICustomerRepository'
import { IEmployeeRepository } from '../repositories/IEmployeeRepository'
import { EmployeeRepository } from '../repositories/implementations/EmployeeRepository'
import { CustomerRepository } from '../repositories/implementations/CustomerRepository'
import { ServiceRepository } from '../repositories/implementations/ServiceRepository'
import { ProductRepository } from '../repositories/implementations/ProductRepository'
import { SchedulingRepository } from '../repositories/implementations/SchedulingRepository'
import { ICreateAgendaRequestDTO } from '../domain/DTO/AgendaDTO';
import { Agenda } from '../domain/models/Agenda';
import { Scheduling } from '../domain/models/Scheduling'
import { ConvertDateTime } from '../utils/ConvertingTime'
import { IServicesRepository } from '../repositories/IServicesRepository'
import { IProductRepository } from '../repositories/IProductRepository'
import { ISchedulingRepository } from '../repositories/ISchedulingRepository'

export class AgendaService {
    private employeeRepository: IEmployeeRepository
    private customerRepository: ICustomerRepository
    private servicesRepository: IServicesRepository
    private productsRepository: IProductRepository
    private scheduling: ISchedulingRepository
    constructor ( 
        private agendaRepository: IAgendaRepository
    ){
        this.employeeRepository = new EmployeeRepository
        this.customerRepository = new CustomerRepository
        this.servicesRepository = new ServiceRepository
        this.productsRepository = new ProductRepository
        this.scheduling = new SchedulingRepository
    }

    async create(data: ICreateAgendaRequestDTO) {
        var customer = await this.customerRepository.getById(data.customerId!)
        var employee = await this.employeeRepository.getById(data.employeeId!)
        var service = await this.servicesRepository.getByEntityId(data.serviceId!)
        var product = await this.productsRepository.getByEntityId(data.productId!)

        var date = new Date(parseInt(data.data)).toISOString().replace(/T/, ' ').replace(/\..+/, '')
        var newAgenda = new Agenda({customerId: customer.id, employeeId: employee.id, data: date})

        var [id] = await this.agendaRepository.create(newAgenda);

        var scheduling = new Scheduling({AgendaId: id, serviceId: service.id, productId: product.id})
        await this.scheduling.create(scheduling)

    }

    async getAll() {
        const agendas: Agenda[] = await this.agendaRepository.get()
        agendas.forEach(f => {
            f.data = ConvertDateTime(f.data)
        })
        return agendas
    }

    async getById(id: string) {
        const agenda: Agenda = await this.agendaRepository.getById(id)

        return agenda
    }

    async update(data: ICreateAgendaRequestDTO, id: string) {
        const agendaAlreadyExists = await this.agendaRepository.getById(id);

        if (!agendaAlreadyExists) throw new Error('item não encontrado.');
        var newDate = new Date(parseInt(data.data)).toISOString().replace(/T/, ' ').replace(/\..+/, '')
        data.data = newDate

        await this.agendaRepository.update(data, id);
    }

    async delete(id: string) {
        const agendaAlreadyExists = await this.agendaRepository.getById(id);

        if (!agendaAlreadyExists) throw new Error('item não encontrado.');

        await this.agendaRepository.delete(id);
    }
}
