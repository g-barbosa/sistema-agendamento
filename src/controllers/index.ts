import { 
    accountService, 
    pricesService, 
    stockService, 
    userService } from '../services'
    
import { UserController }  from '../controllers/UserController'
import { PricesController } from '../controllers/PricesController'
import { StockController } from '../controllers/StockController'
import { AccountController } from '../controllers/AccountController'

const userController = new UserController(userService)

const priceControler = new PricesController(pricesService)

const stockControler = new StockController(stockService)

const accountController = new AccountController(accountService)

export { userController,  priceControler, stockControler, accountController}