import express from 'express'
import { UserService } from '../services/UserService'

const userService = new UserService()

const UserController = express.Router()

UserController.get('/users', userService.users)
UserController.get('/users/:id', userService.user)
UserController.post('/users', userService.createNewUser)
UserController.put('/users/:id', userService.editUser)
UserController.delete('/users/:id', userService.deleteUser)

export default UserController