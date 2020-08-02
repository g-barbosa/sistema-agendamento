import express from 'express'
import { 
    accountController, 
    priceControler, 
    stockControler, 
    userController } from './controllers'

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

routes.post('/prices', (request, response) => {
    return priceControler.create(request, response)
})
routes.get('/prices', (request, response) => {
    return priceControler.getAll(request, response)
})
routes.get('/prices/:id', (request, response) => {
    return priceControler.getById(request, response)
})
routes.put('/prices/:id', (request, response) => {
    return priceControler.update(request, response)
})
routes.delete('/prices/:id', (request, response) => {
    return priceControler.delete(request, response)
})

routes.post('/stock', (request, response) => {
    return stockControler.create(request, response)
})
routes.get('/stock', (request, response) => {
    return stockControler.getAll(request, response)
})
routes.get('/stock/:id', (request, response) => {
    return stockControler.getById(request, response)
})
routes.put('/stock/:id', (request, response) => {
    return stockControler.update(request, response)
})
routes.delete('/stock/:id', (request, response) => {
    return stockControler.delete(request, response)
})

routes.post('/login', (request, response) => {
    return accountController.login(request, response)
})

export  { routes }