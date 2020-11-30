import { Request, Response } from 'express'
import { ServicesService } from '../services/ServicesService';

export class ServicesController {

    constructor(
        private servicesService: ServicesService,
    ){}

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { description, value } = request.body

            await this.servicesService.create({ description, value })

            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const services = await this.servicesService.getAll()

            return response.json(services)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            
            const servico = await this.servicesService.getById(id)


            return response.json(servico)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { description, value } = request.body

            await this.servicesService.update({ description, value}, id)

            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.servicesService.delete(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
