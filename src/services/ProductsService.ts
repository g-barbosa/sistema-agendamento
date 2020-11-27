import { IProductRepository } from '../repositories/IProductRepository'
import { ICreateProductRequestDTO } from '../domain/DTO/ProductsDTO';
import { Product } from '../domain/models/Product';

export class ProductsService {
    
    constructor ( 
        private productsRepository: IProductRepository
        ){}

    async create(productData: ICreateProductRequestDTO) {

        const product = new Product(productData);

        await this.productsRepository.create(product);
    }

    async getAll() {
        const products: Product[] = await this.productsRepository.get()

        return products
    }

    async getById(id: string) {
        const product: Product = await this.productsRepository.getByEntityId(id)

        return product
    }

    async update(productData: ICreateProductRequestDTO, id: string) {
        const productAlreadyExists = await this.productsRepository.getByEntityId(id);

        if (!productAlreadyExists) throw new Error('item não encontrado.');

        const product = new Product(productData);

        await this.productsRepository.update(product, id);
    }

    async delete(id: string) {
        const productAlreadyExists = await this.productsRepository.getByEntityId(id);

        if (!productAlreadyExists) throw new Error('item não encontrado.');

        await this.productsRepository.delete(id);
    }
}
