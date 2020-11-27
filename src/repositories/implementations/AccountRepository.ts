import { User } from '../../domain/models/User'
import knex from '../../database/connection';
import { IAccountRepository } from '../IAccountRepository';
import { GenNewDate } from '../../utils/ConvertingTime'
import { Employee } from '../../domain/models/Employee'
export class AccountRepository implements IAccountRepository {

    async getUserByUsername(username: string): Promise<User> {
        const customer : User = await knex('customers').where('login', username).first()
        const employee : User = await knex('employees').where('login', username).first()

        const user = customer || employee

        if (!user && username == "firstUser") {
            const usuario = new Employee({
                name: "admin",
                phone: 11970782322,
                login: "admin",
                password: "admin",
                starts: GenNewDate("00:00"),
                ends: GenNewDate("00:00")
            });

            await knex('employees').insert(usuario)
        }

        return user
    }

}