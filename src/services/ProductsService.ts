import { IProdutosRepository } from '../repositories/IProdutosRepository'
import { ICreateProductRequestDTO } from '../domain/DTO/ProductsDTO';
import { Produto } from '../domain/models/Produto';

export class ProductsService {
    
    constructor ( 
        private produtosRepository: IProdutosRepository
        ){}

    async create(ProdutoData: ICreateProductRequestDTO) {

        const produto = new Produto(ProdutoData);

        await this.produtosRepository.create(produto);
    }

    async getAll() {
        const Produtos: Produto[] = await this.produtosRepository.get()

        return Produtos
    }

    async getById(id: string) {
        const produto: Produto = await this.produtosRepository.getByEntityId(id)

        return produto
    }

    async update(ProdutoData: ICreateProductRequestDTO, id: string) {
        const produtoAlreadyExists = await this.produtosRepository.getByEntityId(id);

        if (!produtoAlreadyExists) throw new Error('item não encontrado.');

        const produto = new Produto(ProdutoData);

        await this.produtosRepository.update(produto, id);
    }

    async delete(id: string) {
        const produtoAlreadyExists = await this.produtosRepository.getByEntityId(id);

        if (!produtoAlreadyExists) throw new Error('item não encontrado.');

        await this.produtosRepository.delete(id);
    }
}
