import express from 'express'
import {AccountService} from '../services/AccountService'

const accountService = new AccountService()

const AccountController = express.Router()

AccountController.post('/login', accountService.login)

export default AccountController