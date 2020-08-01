import { User } from "../domain/models/User";

export interface IUserRepository {
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    create(user: User): Promise<void>;
    update(user: User, id: string): Promise<void>;
    delete(id: string): Promise<void>;
}