import { Request, Response } from 'express'
import { EmployeesService  } from '../services/EmployeesService';

export class EmployeesController {

    constructor(
        private funcionarioService: EmployeesService,
    ){}

    async show (request: Request, response: Response): Promise<void> {
        const funcionarios = await this.funcionarioService.getAll()
        return response.render('funcionarios', {request: request, funcionarios: funcionarios})
    }

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { name, phone, login, password, starts, ends } = request.body
            
            await this.funcionarioService.create({ name, phone, login, password, starts, ends })
            response.redirect('/funcionarios')
            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const funcionario = await this.funcionarioService.getAll()

            return response.json(funcionario)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {

            const { id } = request.params

            const funcionario = await this.funcionarioService.getById(id)

            return response.json(funcionario)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { name, phone, login, password, starts, ends } = request.body

            await this.funcionarioService.update({ name, phone, login, password, starts, ends }, id)

            response.redirect('/funcionarios')
            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.funcionarioService.delete(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
