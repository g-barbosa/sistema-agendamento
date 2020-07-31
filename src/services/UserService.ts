import { Request, Response } from 'express'
import { User } from '../database/interfaces'
import knex from '../database/connection';
import uuid from 'uuid-random';
import genHashPass from '../utils/genPassHash'

export class UserService {
    async users (request: Request, response: Response) {
        const users : User[] = await knex('users')

        return response.json(users)
    }

    async user (request: Request, response: Response) {
        const { id } = request.params
        const user : User = await knex('users').where('id', id).first()

        if (!user) {
            return response.status(404).send('Usuário não encontrado')
        }

        return response.json(user)
    }

    async createNewUser (request: Request, response: Response) {
        try{
            const { name, phone, email, password, type } = request.body

            const user : User = await knex('users').where('email', email).first()

            if (user) {
                return response.status(404).send('Já existe um usuário com este e-mail')
            }

            const newUser: User = {
                entityId: uuid(),
                name: name,
                phone: phone,
                email: email,
                password: await genHashPass(password),
                type: type,
            }

            await knex('users').insert(newUser).then(() => response.status(200).send())

        } catch(erro) {
            throw new Error(erro);
        }
    }

    async editUser (request: Request, response: Response) {
        try {
            const { id } = request.params
            const { name, phone, email, password } = request.body

            const userToUpdate: User = await knex('users').where('id', id).update({
                name: name,
                phone: phone,
                email: email,
            })

            if (!userToUpdate) {
                return response.status(404).send('Não foi possível encontrar um usuário com este e-mail')
            }

            return response.status(200).send()

        } catch(erro) {
            throw new Error(erro);
        }
    }

    async deleteUser (request: Request, response: Response) {
        const { id } = request.params

        
        await knex('users').where('id', id).del()

        return response.status(200).send()
    }
}

export default UserService