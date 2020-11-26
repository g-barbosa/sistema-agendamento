export interface ICreateEmployeeRequestDTO {
    id?: number;
    entityId?: string;
    name: string;
    phone: number;
    login: string;
    password: string;
    starts: string;
    ends: string;
}