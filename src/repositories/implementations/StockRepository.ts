import { Stock } from '../../domain/models/Stock'
import knex from '../../database/connection';
import { IStockRepository } from '../IStockRepository';

export class StockRepository implements IStockRepository {
    private user: Stock[] = [];

    async getStock(): Promise<Stock[]> {
        const stockItems : Stock[] = await knex('stock')

        return stockItems
    }

    async getStockById(id: string): Promise<Stock> {
        const stockItem : Stock = await knex('stock').where('entityId', id).first()

        return stockItem
    }

    async create(stockItem: Stock): Promise<void> {

        await knex('stock').insert(stockItem)

    }

    async update(stockItem: Stock, id: string): Promise<void> {

        await knex('stock').where('entityId', id).update({
            description: stockItem.description,
            quantity: stockItem.quantity,
        })
    }

    async delete(id: string): Promise<void> {

        await knex('stock').where('entityId', id).del()

    }
}