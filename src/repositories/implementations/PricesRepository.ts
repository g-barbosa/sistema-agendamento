import { Prices } from '../../domain/models/Prices'
import knex from '../../database/connection';
import { IPricesRepository } from "../IPricesRepository";

export class PricesRepository implements IPricesRepository {
    private user: Prices[] = [];

    async getPrices(): Promise<Prices[]> {
        const users : Prices[] = await knex('prices')

        return users
    }

    async getPriceById(id: string): Promise<Prices> {
        const user : Prices = await knex('prices').where('entityId', id).first()

        return user
    }

    async create(price: Prices): Promise<void> {

        await knex('prices').insert(price)

    }

    async update(price: Prices, id: string): Promise<void> {

        await knex('prices').where('entityId', id).update({
            description: price.description,
            value: price.value,
        })
    }

    async delete(id: string): Promise<void> {

        await knex('prices').where('entityId', id).del()

    }
}