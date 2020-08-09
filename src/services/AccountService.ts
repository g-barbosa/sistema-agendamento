import bcrypt from 'bcrypt'
import GenToken from '../utils/genToken'
import { IUserRepository } from '../repositories/IUserRepository'

export class AccountService {
    constructor ( 
        private stockRepository: IUserRepository
    ){}

    async login (email: string, password: string) {

        const user = await this.stockRepository.getUserByEmail(email)

        if(!user) throw new Error('Usuário ou senha inválidos.');

        const pass = bcrypt.compareSync(password, user.password)

        if (!pass) throw new Error('Usuário ou senha inválidos.');

        return {
            token: GenToken(user.id, user.email)
        }
    }
}