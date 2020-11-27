import { Product } from '../../domain/models/Product'
import knex from '../../database/connection';
import { IProductRepository } from '../IProductRepository';

export class ProductRepository implements IProductRepository {

    async get(): Promise<Product[]> {
        const products : Product[] = await knex('products')

        return products
    }

    async getById(id: number): Promise<Product> {
        const product : Product = await knex('products').where('id', id).first()

        return product
    }

    async getByEntityId(id: string): Promise<Product> {
        const product : Product = await knex('products').where('entityId', id).first()

        return product
    }

    async create(product: Product): Promise<void> {

        await knex('products').insert(product)

    }

    async update(product: Product, id: string): Promise<void> {

        await knex('products').where('entityId', id).update({
            description: product.description,
            quantity: product.quantity,
            value: product.value
        })
    }

    async delete(id: string): Promise<void> {

        await knex('products').where('entityId', id).del()

    }
}