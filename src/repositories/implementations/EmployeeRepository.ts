import { Employee } from '../../domain/models/Employee'
import knex from '../../database/connection';
import { IFuncionarioRepository } from '../IEmployeeRepository';

export class FuncionarioRepository implements IFuncionarioRepository {

    async get(): Promise<Employee[]> {
        const funcionarios : Employee[] = await knex('funcionarios')

        return funcionarios
    }

    async getById(id: string): Promise<Employee> {
        const funcionario : Employee = await knex('funcionarios').where('entityId', id).first()

        return funcionario
    }

    async create(funcionario: Employee): Promise<void> {

        await knex('funcionarios').insert(funcionario)

    }

    async update(funcionario: Employee, id: string): Promise<void> {

        await knex('funcionarios').where('entityId', id).update({
            name: funcionario.name,
            phone: funcionario.phone,
            login: funcionario.login,
            password: funcionario.password,
            starts: funcionario.starts,
            ends: funcionario.ends
        })
    }

    async delete(id: string): Promise<void> {

        await knex('funcionarios').where('entityId', id).del()

    }
}