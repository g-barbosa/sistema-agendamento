import express from 'express'

import PricesController from './controllers/PricesController'
import StockController from './controllers/StockController'
import UserController from './controllers/UserController'
import AccountController from './controllers/AccountController'

const routes = express.Router()

const pricesController = new PricesController()
const stockController = new StockController()
const userController = new UserController()
const accountController = new AccountController()


routes.get('/prices', pricesController.prices)
routes.get('/stock', stockController.stockItems)
routes.get('/users', userController.users)

routes.get('/users/:id', userController.user)

routes.post('/prices', pricesController.addPrice)
routes.post('/stock', stockController.addStockItem)
routes.post('/users', userController.createNewUser)
routes.post('/login', accountController.login)

routes.put('/prices/:id', pricesController.editPrice)
routes.put('/stock/:id', stockController.editStockItem)
routes.put('/users/:id', userController.editUser)

routes.delete('/prices/:id', pricesController.deletePrice)
routes.delete('/stock/:id', stockController.deleteStockItem)
routes.delete('/users/:id', userController.deleteUser)

export default routes