import { User } from "../domain/models/User";

export interface IAccountRepository {
    getUserByUsername(username: string): Promise<User>;
}