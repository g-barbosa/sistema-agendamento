import { Request, Response } from 'express'
import { CustomersService  } from '../services/CustomersService';

export class CustomersController {

    constructor(
        private clienteService: CustomersService,
    ){}

    async show (request: Request, response: Response): Promise<void> {
        const clientes = await this.clienteService.getAll()
        return response.render('clientes', {request: request, clientes: clientes})
    }

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { name, phone, login, password } = request.body
            
            await this.clienteService.create({ name, phone, login, password })
            response.redirect('/clientes')
            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const clientes = await this.clienteService.getAll()

            return response.json(clientes)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {

            const { id } = request.params

            const cliente = await this.clienteService.getById(id)

            return response.json(cliente)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { name, phone, login, password } = request.body

            await this.clienteService.update({ name, phone, login, password}, id)

            response.redirect('/clientes')
            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.clienteService.delete(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
