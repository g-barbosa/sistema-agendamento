import { Request, Response } from 'express'
import { AccountService } from '../services/AccountService';

export class AccountController {

    constructor(
        private accountService: AccountService,
    ){}

    async login (request: Request, response: Response): Promise<Response> {
        try {
            const { email, password } = request.body
            
            const loginInfo = await this.accountService.login(email, password)

            return response.json(loginInfo)

        } catch(err){

            return response.status(404).json({ message: err.message })
        }
    }    
}
