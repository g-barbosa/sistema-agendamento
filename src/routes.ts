import express from 'express'
import { UserRepository } from './repositories/implementations/UserRepository'
import { UserService } from './services/UserService'
import { UserController }  from './controllers/UserController'

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)

const routes = express.Router()

routes.post('/users', (request, response) => {
    return userController.create(request, response)
})
routes.get('/users', (request, response) => {
    return userController.getAll(request, response)
})
routes.get('/users/:id', (request, response) => {
    return userController.getById(request, response)
})
routes.put('/users/:id', (request, response) => {
    return userController.update(request, response)
})
routes.delete('/users/:id', (request, response) => {
    return userController.delete(request, response)
})

export  { routes }