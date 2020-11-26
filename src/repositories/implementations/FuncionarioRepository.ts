import { Funcionario } from '../../domain/models/Funcionario'
import knex from '../../database/connection';
import { IFuncionarioRepository } from '../IFuncionarioRepository';

export class FuncionarioRepository implements IFuncionarioRepository {

    async get(): Promise<Funcionario[]> {
        const funcionarios : Funcionario[] = await knex('funcionarios')

        return funcionarios
    }

    async getById(id: string): Promise<Funcionario> {
        const funcionario : Funcionario = await knex('funcionarios').where('entityId', id).first()

        return funcionario
    }

    async create(funcionario: Funcionario): Promise<void> {

        await knex('funcionarios').insert(funcionario)

    }

    async update(funcionario: Funcionario, id: string): Promise<void> {

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