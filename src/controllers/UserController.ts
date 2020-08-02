import { Request, Response } from 'express'
import { UserService } from '../services/UserService';

export class UserController {

    constructor(
        private userService: UserService,
    ){}

    async create (request: Request, response: Response): Promise<Response> {
        try {
            const { name, phone, email, password, type } = request.body
            
            await this.userService.createUser({ name, email, phone, password, type })

            return response.status(200).send()

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }

    async getAll (request: Request, response: Response): Promise<Response> {
        try {

            const users = await this.userService.getAllUsers()

            return response.json(users)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async getById (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            
            const user = await this.userService.getUserById(id)


            return response.json(user)

        } catch(err){

            return response.status(400).json({ message: err.message })
        }
    }

    async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const { name, phone, email, password, type } = request.body

            const user = await this.userService.updateUser({ name, email, phone, password, type }, id)

            return response.status(200).send()

        } catch(err){
            return response.status(400).json({ message: err.message })
        }
    }

    async delete (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params

            await this.userService.deleteUser(id)

            return response.status(200).send()

        } catch(err){

            return response.status(400).json({ message: err.message })
        }    
    }
    
}
