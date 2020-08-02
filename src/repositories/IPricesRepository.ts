import { Prices } from "../domain/models/Prices";

export interface IPricesRepository {
    getPrices(): Promise<Prices[]>;
    getPriceById(id: string): Promise<Prices>;
    create(price: Prices): Promise<void>;
    update(price: Prices, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}