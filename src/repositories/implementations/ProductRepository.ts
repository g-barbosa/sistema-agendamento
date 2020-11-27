import { Product } from '../../domain/models/Product'
import knex from '../../database/connection';
import { IProductRepository } from '../IProductRepository';

export class ProductRepository implements IProductRepository {

    async get(): Promise<Product[]> {
        const produtos : Product[] = await knex('produtos')

        return produtos
    }

    async getById(id: number): Promise<Product> {
        const produto : Product = await knex('produtos').where('id', id).first()

        return produto
    }

    async getByEntityId(id: string): Promise<Product> {
        const produto : Product = await knex('produtos').where('entityId', id).first()

        return produto
    }

    async create(produto: Product): Promise<void> {

        await knex('produtos').insert(produto)

    }

    async update(produto: Product, id: string): Promise<void> {

        await knex('produtos').where('entityId', id).update({
            description: produto.description,
            quantity: produto.quantity,
            value: produto.value
        })
    }

    async delete(id: string): Promise<void> {

        await knex('produtos').where('entityId', id).del()

    }
}