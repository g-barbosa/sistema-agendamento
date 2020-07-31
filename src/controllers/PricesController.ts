import express from 'express'
import { PricesService } from '../services/PricesService'

const pricesService = new PricesService()

const PricesController = express.Router()

PricesController.get('/prices', pricesService.prices)
PricesController.post('/prices', pricesService.addPrice)
PricesController.put('/prices/:id', pricesService.editPrice)
PricesController.delete('/prices/:id', pricesService.deletePrice)

export default PricesController