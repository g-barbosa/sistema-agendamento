import { Request, Response } from 'express'
import { ProductsService  } from '../services/ProductsService';

export class ProductsController {

    constructor(
        private produtosService: ProductsService,
    ){}

    async show (request: Request, response: Response): Promise<void> {
        const produtos = await this.produtosService.getAll()
        return response.render('produtos', {request: request, produtos: produtos})
    }

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { description, quantity, value } = request.body
            
            await this.produtosService.create({ description, quantity, value })
            response.redirect('/produtos')
            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const produtos = await this.produtosService.getAll()

            return response.json(produtos)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {

            const { id } = request.params

            const produto = await this.produtosService.getById(id)

            return response.json(produto)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { description, quantity, value } = request.body

            await this.produtosService.update({ description, quantity, value}, id)

            response.redirect('/produtos')
            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.produtosService.delete(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
