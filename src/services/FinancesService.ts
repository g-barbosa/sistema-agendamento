import { IServicosRepository } from '../repositories/IServicesRepository'
import { IProdutosRepository } from '../repositories/IProductRepository'
import { IAgendamentoRepository } from '../repositories/ISchedulingRepository'
import { ServicosRepository } from '../repositories/implementations/ServiceRepository'
import { ProdutosRepository } from '../repositories/implementations/ProductRepository'
import { AgendamentoRepository } from '../repositories/implementations/SchedulingRepository'

export class FinancesService {
    private services: IServicosRepository
    private products: IProdutosRepository
    private agendamentos: IAgendamentoRepository
    constructor () {
        this.services = new ServicosRepository
        this.products = new ProdutosRepository
        this.agendamentos = new AgendamentoRepository
    }

    async get() {
        var agendamentos = await this.agendamentos.get()
        var lucro = 0
        var despesa = 0
        var total = 0

        const resultados = agendamentos.map(async agendamento => {
            var service = await this.services.getById(agendamento.idServicos)
            var product = await this.products.getById(agendamento.idProduto)

            lucro += service.value
            despesa += product.value
        })

        await Promise.all(resultados)

        total = lucro - despesa

        return { lucro, despesa, total }
    }
}
