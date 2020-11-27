import { Employee } from '../../domain/models/Employee'
import knex from '../../database/connection';
import { IEmployeeRepository } from '../IEmployeeRepository';

export class EmployeeRepository implements IEmployeeRepository {

    async get(): Promise<Employee[]> {
        const employees : Employee[] = await knex('employees')

        return employees
    }

    async getById(id: string): Promise<Employee> {
        const employee : Employee = await knex('employees').where('entityId', id).first()

        return employee
    }

    async create(employee: Employee): Promise<void> {

        await knex('employees').insert(employee)

    }

    async update(employee: Employee, id: string): Promise<void> {

        await knex('employees').where('entityId', id).update({
            name: employee.name,
            phone: employee.phone,
            login: employee.login,
            password: employee.password,
            starts: employee.starts,
            ends: employee.ends
        })
    }

    async delete(id: string): Promise<void> {

        await knex('employees').where('entityId', id).del()

    }
}