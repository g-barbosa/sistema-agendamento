export interface Stock {
    id: number;
    entityId: string;
    description: string;
    quantity: number;
}

export interface Prices {
    id: number;
    entityId: string;
    description: string;
    value: number;
}

export interface User {
    id?: number;
    entityId: string;
    name: string;
    phone: string;
    email: string;
    password: string;
    type: string;

}
