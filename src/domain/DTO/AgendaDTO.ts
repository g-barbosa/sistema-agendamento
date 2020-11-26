export interface ICreateAgendaRequestDTO {
    id?: number;
    entityId?: string;
    data: string;
    employeeId?: string;
    customerId?: string;
    serviceId?: string;
    productId?: string
}