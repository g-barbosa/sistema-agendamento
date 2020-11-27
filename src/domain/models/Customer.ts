import uuid from 'uuid-random';
import { GenPassHash } from '../../utils/PasswordUtils'

export class Customer {
    public readonly id!: number;

    public readonly entityId!: string;
    public name: string;
    public phone: number;
    public login: string;
    public password: string;

    constructor(props: Omit<Customer, 'id' | 'entityId'>, entityId?: string) {

        this.name = props.name;
        this.phone = props.phone;
        this.login = props.login;
        this.password = GenPassHash(props.password);

        if (!entityId) {
            this.entityId = uuid();
        }
    }
}