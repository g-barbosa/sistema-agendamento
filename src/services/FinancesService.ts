import { IServicesRepository } from '../repositories/IServicesRepository'
import { IProductRepository } from '../repositories/IProductRepository'
import { ISchedulingRepository } from '../repositories/ISchedulingRepository'
import { ServiceRepository } from '../repositories/implementations/ServiceRepository'
import { ProductRepository } from '../repositories/implementations/ProductRepository'
import { SchedulingRepository } from '../repositories/implementations/SchedulingRepository'

export class FinancesService {
    private services: IServicesRepository
    private products: IProductRepository
    private scheduling: ISchedulingRepository
    constructor () {
        this.services = new ServiceRepository
        this.products = new ProductRepository
        this.scheduling = new SchedulingRepository
    }

    async get() {
        var scheduling = await this.scheduling.get()
        var lucro = 0
        var despesa = 0
        var total = 0

        const results = scheduling.map(async scheduling => {
            var service = await this.services.getById(scheduling.serviceId)
            var product = await this.products.getById(scheduling.productId)

            lucro += service.value
            despesa += product.value
        })

        await Promise.all(results)

        total = lucro - despesa

        return { lucro, despesa, total }
    }
}
