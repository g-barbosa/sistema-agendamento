import express from 'express'
import { 
    agendaController,
    servicesControler,
    customersController,
    employeesController,
    productsControler, 
    financesController,
    accountController } from '../controllers'

const routesRest = express.Router()

//---------------------Account---------------------------
routesRest.post('/login', (request, response) => {
    return accountController.login(request, response)
})
//---------------------Services---------------------------
routesRest.post('/services', (request, response) => {
    return servicesControler.create(request, response)
})

routesRest.get('/services', (request, response) => {
    return servicesControler.getAll(request, response)
})

routesRest.get('/services/:id', (request, response) => {
    return servicesControler.getById(request, response)
})

routesRest.put('/services/:id', (request, response) => {
    return servicesControler.update(request, response)
})

routesRest.delete('/services/:id', (request, response) => {
    return servicesControler.delete(request, response)
})

//---------------------Products---------------------------
routesRest.post('/product', (request, response) => {
    return productsControler.create(request, response)
})

routesRest.get('/product', (request, response) => {
    return productsControler.getAll(request, response)
})

routesRest.get('/product/:id', (request, response) => {
    return productsControler.getById(request, response)
})

routesRest.put('/product/:id', (request, response) => {
    return productsControler.update(request, response)
})

routesRest.delete('/product/:id', (request, response) => {
    return productsControler.delete(request, response)
})

//---------------------Customers---------------------------
routesRest.post('/customers', (request, response) => {
    return customersController.create(request, response)
})

routesRest.get('/customers', (request, response) => {
    return customersController.getAll(request, response)
})

routesRest.get('/customers/:id', (request, response) => {
    return customersController.getById(request, response)
})

routesRest.put('/customers/:id', (request, response) => {
    return customersController.update(request, response)
})

routesRest.delete('/customers/:id', (request, response) => {
    return customersController.delete(request, response)
})

//---------------------Employees---------------------------
routesRest.post('/employees', (request, response) => {
    return employeesController.create(request, response)
})

routesRest.get('/employees', (request, response) => {
    return employeesController.getAll(request, response)
})

routesRest.get('/employees/:id', (request, response) => {
    return employeesController.getById(request, response)
})

routesRest.put('/employees/:id', (request, response) => {
    return employeesController.update(request, response)
})

routesRest.delete('/employees/:id', (request, response) => {
    return employeesController.delete(request, response)
})

//---------------------Agenda---------------------------
routesRest.post('/agenda', (request, response) => {
    return agendaController.create(request, response)
})

routesRest.get('/agenda', (request, response) => {
    return agendaController.getAll(request, response)
})

routesRest.get('/agenda/:id', (request, response) => {
    return agendaController.getById(request, response)
})

routesRest.put('/agenda/:id', (request, response) => {
    return agendaController.update(request, response)
})

routesRest.delete('/agenda/:id', (request, response) => {
    return agendaController.delete(request, response)
})

//---------------------Agenda---------------------------
routesRest.get('/finances', (request, response) => {
    return financesController.get(request, response)
})

export  { routesRest }