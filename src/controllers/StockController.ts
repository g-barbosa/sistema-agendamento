import { Request, Response } from 'express'
import { StockService } from '../services/StockService';

export class StockController {

    constructor(
        private stockService: StockService,
    ){}

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { description, quantity } = request.body
            
            await this.stockService.createStock({ description, quantity })

            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const stock = await this.stockService.getAllStock()

            return response.json(stock)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            
            const stockItem = await this.stockService.getStockById(id)


            return response.json(stockItem)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { description, quantity } = request.body

            await this.stockService.updateStock({ description, quantity}, id)

            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.stockService.deleteStock(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
