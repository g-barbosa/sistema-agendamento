import express from 'express'
import { StockService } from '../services/StockService'

const stockService = new StockService()

const StockController = express.Router()

StockController.get('/stock', stockService.stockItems)
StockController.post('/stock', stockService.addStockItem)
StockController.put('/stock/:id', stockService.editStockItem)
StockController.delete('/stock/:id', stockService.deleteStockItem)

export default StockController