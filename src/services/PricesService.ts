import { Request, Response } from 'express'
import knex from '../database/connection'
import uuid from 'uuid-random';
import { Prices } from '../database/interfaces'

export class PricesService {
    async prices (request: Request, response: Response) {
        const prices : Prices[] = await knex('prices')

        return response.json(prices)
    }

    async addPrice (request: Request, response: Response) {
        try{
            const { description, value } = request.body;

            await knex('prices').insert({
                entityId: uuid(),
                description: description,
                value: value,

            })
            .then(() => response.status(200).send())
            
        } catch(error){
            throw new Error(error)
        }
    }

    async editPrice (request: Request, response: Response) {
        const { id } = request.params
        const { description, value } = request.body;

        const item = await knex('prices').where('id', id).update({
            description: description,
            value: value
        })

        if (!item) {
            return response.status(404).json({message: 'Item not found'})
        }

        return response.status(200).send()
    }

    async deletePrice (request: Request, response: Response) {
        const { id } = request.params

        await knex('prices').where('id', id).del()

        return response.status(200).send()
    }
}