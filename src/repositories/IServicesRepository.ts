import { Service } from "../domain/models/Service";

export interface IServicesRepository {
    get(): Promise<Service[]>;
    getById(id: number): Promise<Service>;
    getByEntityId(id: string): Promise<Service>;
    create(service: Service): Promise<void>;
    update(service: Service, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}