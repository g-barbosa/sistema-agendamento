import uuid from 'uuid-random';
import knex from '../../database/connection';

export class Produto {
    public readonly id!: number;

    public readonly entityId!: string;
    public description: string;
    public quantity: number;
    public value: number;
    public readonly createdDate!: string;

    constructor(props: Omit<Produto, 'id' | 'entityId' | 'createdDate'>, entityId?: string, createdDate?: string) {

        this.description = props.description;
        this.quantity = props.quantity;
        this.value = props.value;

        if (!entityId) {
            this.entityId = uuid();
        }

        if (!createdDate) {
            this.createdDate = knex.fn.now();
        }
    }
}