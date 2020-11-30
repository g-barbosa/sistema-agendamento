import { Request, Response } from 'express'
import { ProductsService  } from '../services/ProductsService';

export class ProductsController {

    constructor(
        private productService: ProductsService,
    ){}

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { description, quantity, value } = request.body
            
            await this.productService.create({ description, quantity, value })

            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const product = await this.productService.getAll()

            return response.json(product)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {

            const { id } = request.params

            const product = await this.productService.getById(id)

            return response.json(product)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { description, quantity, value } = request.body

            await this.productService.update({ description, quantity, value}, id)

            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.productService.delete(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
