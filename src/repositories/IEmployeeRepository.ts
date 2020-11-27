import { Employee } from "../domain/models/Employee";

export interface IFuncionarioRepository {
    get(): Promise<Employee[]>;
    getById(id: string): Promise<Employee>;
    create(funcionario: Employee): Promise<void>;
    update(funcionario: Employee, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}