import { IProductRepository } from '../repositories/IProductRepository'
import { ICreateProductRequestDTO } from '../domain/DTO/ProductsDTO';
import { Product } from '../domain/models/Product';

export class ProductsService {
    
    constructor ( 
        private produtosRepository: IProductRepository
        ){}

    async create(ProdutoData: ICreateProductRequestDTO) {

        const produto = new Product(ProdutoData);

        await this.produtosRepository.create(produto);
    }

    async getAll() {
        const Produtos: Product[] = await this.produtosRepository.get()

        return Produtos
    }

    async getById(id: string) {
        const produto: Product = await this.produtosRepository.getByEntityId(id)

        return produto
    }

    async update(ProdutoData: ICreateProductRequestDTO, id: string) {
        const produtoAlreadyExists = await this.produtosRepository.getByEntityId(id);

        if (!produtoAlreadyExists) throw new Error('item não encontrado.');

        const produto = new Product(ProdutoData);

        await this.produtosRepository.update(produto, id);
    }

    async delete(id: string) {
        const produtoAlreadyExists = await this.produtosRepository.getByEntityId(id);

        if (!produtoAlreadyExists) throw new Error('item não encontrado.');

        await this.produtosRepository.delete(id);
    }
}
