import { ServicosRepository } from './ServiceRepository'
import { ProdutosRepository } from './ProductRepository'
import { ClienteRepository } from './CustomerRepository'
import { FuncionarioRepository } from './EmployeeRepository'
import { AgendaRepository } from './AgendaRepository'
import { AccountRepository } from './AccountRepository'

const servicosRepository = new ServicosRepository()
const produtosRepository = new ProdutosRepository()
const clienteRepository = new ClienteRepository()
const funcionarioRepository = new FuncionarioRepository()
const agendaRepository = new AgendaRepository()
const accountRepository = new AccountRepository()

export 
    { 
        servicosRepository, 
        produtosRepository, 
        clienteRepository, 
        funcionarioRepository,
        agendaRepository,
        accountRepository
    }