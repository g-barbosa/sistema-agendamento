export interface ICreateUserRequestDTO {
    id?: number;
    entityId?: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    type: string;
}