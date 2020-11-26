import { Funcionario } from "../domain/models/Funcionario";

export interface IFuncionarioRepository {
    get(): Promise<Funcionario[]>;
    getById(id: string): Promise<Funcionario>;
    create(funcionario: Funcionario): Promise<void>;
    update(funcionario: Funcionario, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}