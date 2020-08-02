import { IPricesRepository } from '../repositories/IPricesRepository'
import { ICreatePriceRequestDTO } from '../domain/DTO/PricesDTO';
import { Prices } from '../domain/models/Prices';

export class PricesService {
    
    constructor ( 
        private pricesRepository: IPricesRepository
        ){}

    async createPrice(priceData: ICreatePriceRequestDTO) {

        const price = new Prices(priceData);

        await this.pricesRepository.create(price);
    }

    async getAllPrices() {
        const prices: Prices[] = await this.pricesRepository.getPrices()

        return prices
    }

    async getPriceById(id: string) {
        const price: Prices = await this.pricesRepository.getPriceById(id)

        return price
    }

    async updatePrice(priceData: ICreatePriceRequestDTO, id: string) {
        const priceAlreadyExists = await this.pricesRepository.getPriceById(id);

        if (!priceAlreadyExists) throw new Error('Preço não encontrado.');

        const price = new Prices(priceData);

        await this.pricesRepository.update(price, id);
    }

    async deletePrice(id: string) {
        const priceAlreadyExists = await this.pricesRepository.getPriceById(id);

        if (!priceAlreadyExists) throw new Error('Preço não encontrado.');

        await this.pricesRepository.delete(id);
    }
}
