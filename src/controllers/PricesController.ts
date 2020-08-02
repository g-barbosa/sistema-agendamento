import { Request, Response } from 'express'
import { PricesService } from '../services/PricesService';

export class PricesController {

    constructor(
        private pricesService: PricesService,
    ){}

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { description, value } = request.body
            
            await this.pricesService.createPrice({ description, value })

            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const prices = await this.pricesService.getAllPrices()

            return response.json(prices)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            
            const price = await this.pricesService.getPriceById(id)


            return response.json(price)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { description, value } = request.body

            await this.pricesService.updatePrice({ description, value}, id)

            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.pricesService.deletePrice(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
