import { IStockRepository } from '../repositories/IStockRepository'
import { ICreateStockRequestDTO } from '../domain/DTO/StockDTO';
import { Stock } from '../domain/models/Stock';

export class StockService {
    
    constructor ( 
        private stockRepository: IStockRepository
        ){}

    async createStock(stockData: ICreateStockRequestDTO) {

        const stockItem = new Stock(stockData);

        await this.stockRepository.create(stockItem);
    }

    async getAllStock() {
        const stockItems: Stock[] = await this.stockRepository.getStock()

        return stockItems
    }

    async getStockById(id: string) {
        const stock: Stock = await this.stockRepository.getStockById(id)

        return stock
    }

    async updateStock(stockData: ICreateStockRequestDTO, id: string) {
        const stockAlreadyExists = await this.stockRepository.getStockById(id);

        if (!stockAlreadyExists) throw new Error('item não encontrado.');

        const stock = new Stock(stockData);

        await this.stockRepository.update(stock, id);
    }

    async deleteStock(id: string) {
        const stockAlreadyExists = await this.stockRepository.getStockById(id);

        if (!stockAlreadyExists) throw new Error('item não encontrado.');

        await this.stockRepository.delete(id);
    }
}
