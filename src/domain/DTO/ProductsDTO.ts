export interface ICreateProductRequestDTO {
    id?: number;
    entityId?: string;
    description: string;
    quantity: number;
    value: number;
}