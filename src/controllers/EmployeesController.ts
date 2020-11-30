import { Request, Response } from 'express'
import { EmployeesService  } from '../services/EmployeesService';

export class EmployeesController {

    constructor(
        private employeeService: EmployeesService,
    ){}

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { name, phone, login, password, starts, ends } = request.body
            
            await this.employeeService.create({ name, phone, login, password, starts, ends })

            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const employee = await this.employeeService.getAll()

            return response.json(employee)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {

            const { id } = request.params

            const employee = await this.employeeService.getById(id)

            return response.json(employee)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { name, phone, login, password, starts, ends } = request.body

            await this.employeeService.update({ name, phone, login, password, starts, ends }, id)

            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.employeeService.delete(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
