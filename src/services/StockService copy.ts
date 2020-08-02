import { Request, Response, response } from 'express'
import knex from '../database/connection'
import uuid from 'uuid-random';
import { Stock } from '../database/interfaces'

export class StockService {
    async stockItems (request: Request, response: Response) {
        const stock : Stock[] = await knex('stock')
        
        return response.json(stock)
    }

    async addStockItem (request: Request, response: Response) {
        try{
            const { description, quantity } = request.body;

            await knex('stock').insert({
                entityId: uuid(),
                description: description,
                quantity: quantity,
            })
            .then(() => response.status(200).send())
            
        } catch(error){
            throw new Error(error)
        }
    }

    async editStockItem (request: Request, response: Response) {
        const { id } = request.params
        const { description, quantity } = request.body;

        const item = await knex('stock').where('id', id).update({
            description: description,
            quantity: quantity
        })

        if (!item) {
            return response.status(404).json({message: 'Item not found'})
        }

        return response.status(200).send()
    }

    async deleteStockItem (request: Request, response: Response) {
        const { id } = request.params

        await knex('stock').where('id', id).del()

        return response.status(200).send()
    }
}