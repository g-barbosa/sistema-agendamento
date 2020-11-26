import {
    agendaService,
    customersService,
    employeesService,
    servicesService, 
    productsService,
    financesService,
    accountService } from '../services'
    
import { ServicesController } from './ServicesController'
import { ProductsController } from './ProductsController'
import { CustomersController } from './CustomersController'
import { EmployeesController } from './EmployeesController'
import { AgendaController } from './AgendaController'
import { FinancesController } from './FinancesController'
import { AccountController } from './AccountController'

const servicesControler = new ServicesController(servicesService)
const productsControler = new ProductsController(productsService)
const customersController = new CustomersController(customersService)
const employeesController = new EmployeesController(employeesService)
const agendaController = new AgendaController(agendaService)
const financesController = new FinancesController(financesService)
const accountController = new AccountController(accountService)


export { 
    servicesControler, 
    productsControler, 
    customersController, 
    employeesController, 
    agendaController,
    financesController,
    accountController }