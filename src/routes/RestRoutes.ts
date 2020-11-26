import express from 'express'
import { 
    agendaController,
    servicoControler,
    clienteController,
    funcionarioController,
    produtoControler, 
    financesController,
    accountController } from '../controllers'

const routesRest = express.Router()

/*
routesRest.use((request, response, next) => {

    if ( request.url !== "/login" && !request.session?.isLoggedIn ) {

        response.redirect("/login")

    }

    next();

}); 
*/
//---------------------Account---------------------------
routesRest.post('/login', (request, response) => {
    return accountController.login(request, response)
})
//---------------------Services---------------------------
routesRest.post('/prices', (request, response) => {
    return servicoControler.create(request, response)
})

routesRest.get('/prices', (request, response) => {
    return servicoControler.getAll(request, response)
})

routesRest.get('/prices/:id', (request, response) => {
    return servicoControler.getById(request, response)
})

routesRest.post('/prices/:id', (request, response) => {
    return servicoControler.update(request, response)
})

routesRest.delete('/prices/:id', (request, response) => {
    return servicoControler.delete(request, response)
})

//---------------------Products---------------------------
routesRest.post('/stock', (request, response) => {
    return produtoControler.create(request, response)
})

routesRest.get('/stock', (request, response) => {
    return produtoControler.getAll(request, response)
})

routesRest.get('/stock/:id', (request, response) => {
    return produtoControler.getById(request, response)
})

routesRest.post('/stock/:id', (request, response) => {
    return produtoControler.update(request, response)
})

routesRest.delete('/stock/:id', (request, response) => {
    return produtoControler.delete(request, response)
})

//---------------------Customers---------------------------
routesRest.post('/clients', (request, response) => {
    return clienteController.create(request, response)
})

routesRest.get('/clients', (request, response) => {
    return clienteController.getAll(request, response)
})

routesRest.get('/clients/:id', (request, response) => {
    return clienteController.getById(request, response)
})

routesRest.post('/clients/:id', (request, response) => {
    return clienteController.update(request, response)
})

routesRest.delete('/clients/:id', (request, response) => {
    return clienteController.delete(request, response)
})

//---------------------Employees---------------------------
routesRest.post('/employees', (request, response) => {
    return funcionarioController.create(request, response)
})

routesRest.get('/employees', (request, response) => {
    return funcionarioController.getAll(request, response)
})

routesRest.get('/employees/:id', (request, response) => {
    return funcionarioController.getById(request, response)
})

routesRest.post('/employees/:id', (request, response) => {
    return funcionarioController.update(request, response)
})

routesRest.delete('/employees/:id', (request, response) => {
    return funcionarioController.delete(request, response)
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

routesRest.post('/agenda/:id', (request, response) => {
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