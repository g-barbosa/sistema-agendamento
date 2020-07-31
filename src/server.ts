import express from 'express';
import cors from 'cors'
import AccountController from './controllers/AccountController'
import UserController from './controllers/UserController'
import PricesController from './controllers/PricesController'
import StockController from './controllers/StockController'

const app = express();
app.use(cors())
app.use(express.json())
app.use(AccountController)
app.use(UserController)
app.use(PricesController)
app.use(StockController)

app.listen(3333)

export default app
//module.exports = app