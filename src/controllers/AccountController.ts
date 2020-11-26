import { Request, Response } from 'express'
import { AccountService  } from '../services/AccountService';

export class AccountController {

    constructor(
        private accountService: AccountService,
    ){}

    async show (request: Request, response: Response): Promise<void> {
        return response.render('login', {request: request})
    }

    async login (request: Request, response: Response): Promise<Response> {
        try {

            const { login, password } = request.body

            const loginInfo = await this.accountService.login(login, password)

            request.session!!.isLoggedIn = true
            request.session!!.data = {
                name: loginInfo.name
            }
            // return response.json( {token: loginInfo} )
            return response.json({
                name: loginInfo.name
            })
        }
        catch (err) {
            return response.status(404).json({ message: err.message })
        }
    }
    
}