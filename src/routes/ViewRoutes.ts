import express from 'express'
import { ValidateSession } from '../utils/ValidateSession'
import { 
    agendaController,
    servicoControler,
    clienteController,
    funcionarioController,
    produtoControler,
    accountController, 
    financesController} from '../controllers'

import { agendaService,
        clienteService,
        funcionarioService,
        produtosService,
        servicosService } from '../services'

const routesView = express.Router()
/*
routesView.use((request, response, next) => {

    if ( request.url !== "/login" && !request.session?.isLoggedIn ) {

        response.redirect("/login")

    }

    next()

});
*/
//                  STATIC ROUTES
//---------------------Account---------------------------
routesView.get('/login', (request, response) => {
    return accountController.show(request, response)
})

routesView.get('/logout', (request, response) => {

    request.session?.destroy((err) => console.log("deslogado"))

    response.redirect("/login")

})

//---------------------Dashboard---------------------------
routesView.get('/', (request, response) => {
    ValidateSession(request, response)
    response.redirect("/dashboard")
})

routesView.get('/dashboard', (request, response) => {
    ValidateSession(request, response)
    return financesController.show(request, response)
})

//---------------------Agendis :)--------------------------
routesView.get('/agendas', async (request, response) => {
    ValidateSession(request, response)
    const agendas = await agendaService.getAll()
    const clientes = await clienteService.getAll()
    const servicos = await servicosService.getAll()
    const funcionarios = await funcionarioService.getAll()
    const produtos = await produtosService.getAll()

    return response.render('agendas', {
        request: request,
        agendas: agendas,
        clientes: clientes,
        servicos: servicos,
        funcionarios: funcionarios,
        produtos: produtos
    })

})

//---------------------Services--------------------------
routesView.get('/servicos', (request, response) => {
    ValidateSession(request, response)
    return servicoControler.show(request, response)
})

routesView.get('/novo_servico', (request, response) => {
    ValidateSession(request, response)
    return response.render('novo_servico', {request: request})
})

routesView.get('/editar_servico/:id', async (request, response) => {
    ValidateSession(request, response)
    const {id} = request.params
    const servico = await servicosService.getById(id)

    return response.render('editar_servico', {request: request, servico: servico})

})

//---------------------Products--------------------------
routesView.get('/produtos', (request, response) => {
    ValidateSession(request, response)
    return produtoControler.show(request, response)
})

routesView.get('/novo_produto', (request, response) => {
    ValidateSession(request, response)
    return response.render('novo_produto', {request: request})
})

routesView.get('/editar_produto/:id', async (request, response) => {
    ValidateSession(request, response)
    const {id} = request.params
    const produto = await produtosService.getById(id)

    return response.render('editar_produto', {request: request, produto: produto})
})

//---------------------Employees--------------------------
routesView.get('/funcionarios', (request, response) => {
    ValidateSession(request, response)
    return funcionarioController.show(request, response)
})

routesView.get('/novo_funcionario', (request, response) => {
    ValidateSession(request, response)
    return response.render('novo_funcionario', {request: request})
})

routesView.get('/editar_funcionario/:id', async (request, response) => {
    ValidateSession(request, response)
    const {id} = request.params
    const funcionario = await funcionarioService.getById(id)

    return response.render('editar_funcionario', {request: request, funcionario: funcionario})
})

//---------------------Customers--------------------------
routesView.get('/clientes', (request, response) => {
    ValidateSession(request, response)
    return clienteController.show(request, response)
})

routesView.get('/novo_cliente', (request, response) => {
    ValidateSession(request, response)
    return response.render('novo_cliente', {request: request})
})

routesView.get('/editar_cliente/:id', async (request, response) => {
    ValidateSession(request, response)
    const {id} = request.params
    const cliente = await clienteService.getById(id)

    return response.render('editar_cliente', {request: request, cliente: cliente})
})

export  { routesView }