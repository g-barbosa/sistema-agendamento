import { Stock } from "../domain/models/Stock";

export interface IStockRepository {
    getStock(): Promise<Stock[]>;
    getStockById(id: string): Promise<Stock>;
    create(stockItem: Stock): Promise<void>;
    update(stockItem: Stock, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}