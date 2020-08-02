import { IUserRepository } from "../IUserRepository";
import { User } from '../../domain/models/User'
import knex from '../../database/connection';

export class UserRepository implements IUserRepository {
    private user: User[] = [];

    async getUsers(): Promise<User[]> {
        const users : User[] = await knex('users')

        return users
    }

    async getUserById(id: string): Promise<User>  {
        const user : User = await knex('users').where('entityId', id).first()

        return user
    }

    async getUserByEmail(email: string): Promise<User> {
        const user : User = await knex('users').where('email', email).first()

        return user
    }

    async create(user: User): Promise<void> {

        await knex('users').insert(user)

    }

    async update(user: User, id: string): Promise<void> {

        await knex('users').where('entityId', id).update({
            name: user.name,
            phone: user.phone,
            email: user.email,
        })
    }

    async delete(id: string): Promise<void> {

        await knex('users').where('entityId', id).del()

    }
}