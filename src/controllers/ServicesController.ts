import { Request, Response } from 'express'
import { ServicesService } from '../services/ServicesService';

export class ServicesController {

    constructor(
        private servicosService: ServicesService,
    ){}

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { description, value } = request.body

            await this.servicosService.create({ description, value })

            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const servicos = await this.servicosService.getAll()

            return response.json(servicos)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            
            const servico = await this.servicosService.getById(id)


            return response.json(servico)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { description, value } = request.body

            await this.servicosService.update({ description, value}, id)

            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.servicosService.delete(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
