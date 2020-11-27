import {
    agendaRepository,
    customerRepository,
    employeeRepository,
    serviceRepository,
    productsRepository,
    accountRepository } from '../repositories/implementations'
    
import { ServicesService } from './ServicesService'
import { ProductsService } from './ProductsService'
import { CustomersService } from './CustomersService'
import { EmployeesService } from './EmployeesService'
import { AgendaService } from './AgendaService'
import { FinancesService } from './FinancesService'
import { AccountService } from './AccountService'


const servicesService = new ServicesService(serviceRepository)
const productsService = new ProductsService(productsRepository)
const customersService = new CustomersService(customerRepository)
const employeesService = new EmployeesService(employeeRepository)
const agendaService = new AgendaService(agendaRepository)
const financesService = new FinancesService()
const accountService = new AccountService(accountRepository)

export { 
    servicesService, 
    productsService, 
    customersService, 
    employeesService, 
    agendaService,
    financesService,
    accountService }