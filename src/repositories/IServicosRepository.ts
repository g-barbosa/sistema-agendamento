import { Servico } from "../domain/models/Servico";

export interface IServicosRepository {
    get(): Promise<Servico[]>;
    getById(id: number): Promise<Servico>;
    getByEntityId(id: string): Promise<Servico>;
    create(servico: Servico): Promise<void>;
    update(servico: Servico, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}