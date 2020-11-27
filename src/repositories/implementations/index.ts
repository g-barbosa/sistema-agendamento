import { ServiceRepository } from './ServiceRepository'
import { ProductRepository } from './ProductRepository'
import { CustomerRepository } from './CustomerRepository'
import { EmployeeRepository } from './EmployeeRepository'
import { AgendaRepository } from './AgendaRepository'
import { AccountRepository } from './AccountRepository'

const serviceRepository = new ServiceRepository()
const productsRepository = new ProductRepository()
const customerRepository = new CustomerRepository()
const employeeRepository = new EmployeeRepository()
const agendaRepository = new AgendaRepository()
const accountRepository = new AccountRepository()

export 
    { 
        serviceRepository, 
        productsRepository, 
        customerRepository, 
        employeeRepository,
        agendaRepository,
        accountRepository
    }