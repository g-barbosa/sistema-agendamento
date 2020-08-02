import { IUserRepository } from '../repositories/IUserRepository'
import { ICreateUserRequestDTO } from '../domain/DTO/UserDTO';
import { User } from '../domain/models/User';

export class UserService {
    
    constructor ( 
        private userRepository: IUserRepository
        ){}

    async createUser(userData: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.getUserByEmail(userData.email);

        if (userAlreadyExists) throw new Error('Usuário já existe.');

        const user = new User(userData);

        await this.userRepository.create(user);
    }

    async getAllUsers() {
        const users: User[] = await this.userRepository.getUsers()

        return users
    }

    async getUserById(id: string) {
        const user: User = await this.userRepository.getUserById(id)

        return user
    }

    async updateUser(userData: ICreateUserRequestDTO, id: string) {
        const userAlreadyExists = await this.userRepository.getUserById(id);

        if (!userAlreadyExists) throw new Error('Usuário não encontrado.');

        const user = new User(userData);

        await this.userRepository.update(user, id);
    }

    async deleteUser(id: string) {
        const userAlreadyExists = await this.userRepository.getUserById(id);

        if (!userAlreadyExists) throw new Error('Usuário não encontrado.');

        await this.userRepository.delete(id);
    }
}
