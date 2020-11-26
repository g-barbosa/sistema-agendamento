import { Produto } from '../../domain/models/Produto'
import knex from '../../database/connection';
import { IProdutosRepository } from '../IProdutosRepository';

export class ProdutosRepository implements IProdutosRepository {

    async get(): Promise<Produto[]> {
        const produtos : Produto[] = await knex('produtos')

        return produtos
    }

    async getById(id: number): Promise<Produto> {
        const produto : Produto = await knex('produtos').where('id', id).first()

        return produto
    }

    async getByEntityId(id: string): Promise<Produto> {
        const produto : Produto = await knex('produtos').where('entityId', id).first()

        return produto
    }

    async create(produto: Produto): Promise<void> {

        await knex('produtos').insert(produto)

    }

    async update(produto: Produto, id: string): Promise<void> {

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