import { Scheduling } from "../domain/models/Scheduling";

export interface IAgendamentoRepository {
    create(agendamento: Scheduling): Promise<Number[]>;
    get(): Promise<Scheduling[]>;
    delete(id: string): Promise<void>;
}