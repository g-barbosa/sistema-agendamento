import request from 'supertest'
import app from '../../src/server'
import usertype from '../../src/domain/enums/UserTypeEnum'

describe('User Tests', () => {
    test('Should create a new user (client)', async() => {
        const response = await request(app).post('/users').send({
            name: "Giovanne",
            phone: "11970782322",
            email: "blogsdogio@gmail.com",
            password: "123456",
            type: usertype.Client
        })

        expect(response.status).toBe(200)
    })

    test('Should login', async() => {
        const response = await request(app).post('/login').send({
            email: "blogsdogio@gmail.com",
            password: "123456"
        })

        expect(response.body).toHaveProperty("token")
    })

    test('Should receive an error bc user already exists', async() => {
        const response = await request(app).post('/users').send({
            name: "Giovanne",
            phone: "11970782322",
            email: "blogsdogio@gmail.com",
            password: "123456",
            type: usertype.Client
        })

        expect(response.status).toBe(404)
    })

    test('Should get a list of users', async() => {
        const response = await request(app).get('/users')

        expect(response.body[0].email).toBe('blogsdogio@gmail.com')
    })

    test('Should get an user', async () => {
        const users = await request(app).get('/users')

        const response = await request(app).get(`/users/${users.body[0].entityId}`)

        expect(response.status).toBe(200)
    })

    test('Should edit an user', async () => {
        const users = await request(app).get('/users')

        const response = await request(app).put(`/users/${users.body[0].entityId}`).send({
            name: "New Name",
            phone: "1140028922",
            email: "gio.barbosa11@gmail.com",
            password: "123456",
            type: usertype.Client
        })

        expect(response.status).toBe(200)

        const editedUser = await request(app).get(`/users/${users.body[0].entityId}`)

        expect(editedUser.body.name).toBe('New Name')
        expect(editedUser.body.phone).toBe('1140028922')
        expect(editedUser.body.email).toBe('gio.barbosa11@gmail.com')
    })

    test('Should delete an user', async() => {
        const users = await request(app).get('/users')

        const response = await request(app).delete(`/users/${users.body[0].entityId}`)

        expect(response.status).toBe(200)
    })

})

describe('Prices Tests', () => {
    test('should create a new item', async() => {

        const response = await request(app).post('/prices').send({
            description: "Progressiva",
            value: 127
        })

        expect(response.status).toBe(200)
    })

    test('should return a list of prices', async () => {
        
        const response = await request(app).get('/prices')

        expect(response.body[0].description).toBe('Progressiva')
        expect(response.body[0].value).toBe(127)
    })

    test('should edit an item', async() => {

        const item = await request(app).get('/prices')

        const response = await request(app).put(`/prices/${item.body[0].entityId}`).send({
            description: "Corte",
            value: 500
        })

        expect(response.status).toBe(200)
    })

    test('should return a list of edited item', async () => {
        
        const response = await request(app).get('/prices')

        expect(response.body[0].description).toBe('Corte')
        expect(response.body[0].value).toBe(500)
    })

    test('should delete an item', async() => {

        const item = await request(app).get('/prices')

        const response = await request(app).delete(`/prices/${item.body[0].entityId}`)

        expect(response.status).toBe(200)
    })

})

describe('Stock Tests', () => {
    test('should create a new item', async() => {

        const response = await request(app).post('/stock').send({
            description: "Shampoo",
            quantity: 1
        })

        expect(response.status).toBe(200)
    })

    test('should return a list of stock items', async () => {
        
        const response = await request(app).get('/stock')
        
        expect(response.body[0].description).toBe('Shampoo')
        expect(response.body[0].quantity).toBe(1)
    })

    test('should edit an item', async() => {

        const item = await request(app).get('/stock')

        const response = await request(app).put(`/stock/${item.body[0].entityId}`).send({
            description: "Condicionador",
            quantity: 2
        })

        expect(response.status).toBe(200)
    })

    test('should return a list of edited item', async () => {
        
        const response = await request(app).get('/stock')
        
        expect(response.body[0].description).toBe('Condicionador')
        expect(response.body[0].quantity).toBe(2)
    })

    test('should delete an item', async() => {

        const item = await request(app).get('/stock')

        const response = await request(app).delete(`/stock/${item.body[0].entityId}`)

        expect(response.status).toBe(200)
    })
})