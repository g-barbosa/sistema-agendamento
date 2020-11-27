import { Service } from "../domain/models/Service";

export interface IServicosRepository {
    get(): Promise<Service[]>;
    getById(id: number): Promise<Service>;
    getByEntityId(id: string): Promise<Service>;
    create(servico: Service): Promise<void>;
    update(servico: Service, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}