import { Request, Response } from 'express'
import { AgendaService  } from '../services/AgendaService';

export class AgendaController {

    constructor(
        private service: AgendaService,
    ){}

    async show (request: Request, response: Response): Promise<void> {
        const agenda = await this.service.getAll()
        return response.render('agenda', {request: request, agenda: agenda})
    }

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { data, employeeId, customerId, serviceId, productId } = request.body
            
            await this.service.create({ data, employeeId, customerId, serviceId, productId })

            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const agenda = await this.service.getAll()

            return response.json(agenda)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {

            const { id } = request.params

            const agenda = await this.service.getById(id)

            return response.json(agenda)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { data } = request.body

            await this.service.update({ data }, id)

            response.redirect('/agenda')
            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.service.delete(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
