import { Request, Response } from 'express'
import { FinancesService } from '../services/FinancesService';

export class FinancesController {

    constructor(
        private financesService: FinancesService,
    ){}

    async show (request: Request, response: Response): Promise<void> {

        const finances = await this.financesService.get()

        return response.render('dashboard', {request: request, finances: finances})

    }

    async get (request: Request, response: Response): Promise<Response> {
        try {

            const finances = await this.financesService.get()

            return response.json(finances)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }
}