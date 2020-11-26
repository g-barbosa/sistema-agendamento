import {
    agendaRepository,
    clienteRepository,
    funcionarioRepository,
    servicosRepository,
    produtosRepository,
    accountRepository } from '../repositories/implementations'
    
import { ServicesService } from './ServicesService'
import { ProductsService } from './ProductsService'
import { CustomersService } from './CustomersService'
import { EmployeesService } from './EmployeesService'
import { AgendaService } from './AgendaService'
import { FinancesService } from './FinancesService'
import { AccountService } from './AccountService'


const servicesService = new ServicesService(servicosRepository)
const productsService = new ProductsService(produtosRepository)
const customersService = new CustomersService(clienteRepository)
const employeesService = new EmployeesService(funcionarioRepository)
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