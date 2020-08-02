import { 
    pricesRepository, 
    userRepository, 
    stockRepository } from '../repositories/implementations'
    
import { UserService } from '../services/UserService'
import { PricesService } from '../services/PricesService'

import { StockService } from '../services/StockService'

import { AccountService } from '../services/AccountService'

const userService = new UserService(userRepository)

const pricesService = new PricesService(pricesRepository)

const stockService = new StockService(stockRepository)

const accountService = new AccountService(userRepository)

export { userService,  pricesService, stockService, accountService}