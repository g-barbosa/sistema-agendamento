import { Request, Response } from 'express'
import knex from '../database/connection'
import bcrypt from 'bcrypt'
import { User } from '../database/interfaces'
import GenToken from '../utils/genToken'

export class AccountService {
    async login (request: Request, response: Response) {

        const { email, password } = request.body

        const user: User = await knex('users').where('email', email).first()

        if(!user)
            return response.status(404).send('Usuário ou senha inválidos')

        const pass = bcrypt.compareSync(password, user.password)

        if (!pass)
            return response.status(404).send('Usuário ou senha inválidos')

        return response.json({
            token: GenToken(user.id!, user.email)
        })
    }
}