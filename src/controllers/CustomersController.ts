import { Request, Response } from 'express'
import { CustomersService  } from '../services/CustomersService';

export class CustomersController {

    constructor(
        private customerService: CustomersService,
    ){}

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { name, phone, login, password } = request.body
            
            await this.customerService.create({ name, phone, login, password })

            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const customers = await this.customerService.getAll()

            return response.json(customers)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {

            const { id } = request.params

            const customer = await this.customerService.getById(id)

            return response.json(customer)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { name, phone, login, password } = request.body

            await this.customerService.update({ name, phone, login, password}, id)

            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.customerService.delete(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
