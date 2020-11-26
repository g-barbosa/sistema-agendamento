import { Agendamento } from "../domain/models/Agendamento";

export interface IAgendamentoRepository {
    create(agendamento: Agendamento): Promise<Number[]>;
    get(): Promise<Agendamento[]>;
    delete(id: string): Promise<void>;
}