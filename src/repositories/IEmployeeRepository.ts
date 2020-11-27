import { Employee } from "../domain/models/Employee";

export interface IEmployeeRepository {
    get(): Promise<Employee[]>;
    getById(id: string): Promise<Employee>;
    create(employee: Employee): Promise<void>;
    update(employee: Employee, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}