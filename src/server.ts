import express from 'express';
import cors from 'cors'
import AccountController from './controllers/AccountController'
import PricesController from './controllers/PricesController'
import StockController from './controllers/StockController'

import { routes }  from './routes'

const app = express();
app.use(cors())
app.use(express.json())
app.use(AccountController)
app.use(routes)
app.use(PricesController)
app.use(StockController)

app.listen(3333)

export default app