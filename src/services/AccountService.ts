import bcrypt from 'bcrypt'
import { GenToken } from '../utils/PasswordUtils'
import { IAccountRepository } from '../repositories/IAccountRepository'

export class AccountService {
    constructor (
        private accountRepository: IAccountRepository
    ){}

    async login (username: string, password: string) {
        const errorText = 'Usuário ou senha inválidos'

        const user = await this.accountRepository.getUserByUsername(username)

        if (!user) throw new Error(errorText)

        const pass = bcrypt.compareSync(password, user.password)

        if (!pass) throw new Error(errorText)

        // return GenToken(user.entityId, user.login)
        return user

    }
}