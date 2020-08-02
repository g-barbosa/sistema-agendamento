import { UserRepository } from './UserRepository'
import { PricesRepository } from './PricesRepository'
import { StockRepository } from './StockRepository'

const userRepository = new UserRepository()

const pricesRepository = new PricesRepository()

const stockRepository = new StockRepository()


export { userRepository,  pricesRepository, stockRepository }