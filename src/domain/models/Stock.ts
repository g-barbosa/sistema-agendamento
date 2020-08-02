import uuid from 'uuid-random';

export class Stock {
    public readonly id!: number;

    public readonly entityId!: string;
    public description: string;
    public quantity: number;

    constructor(props: Omit<Stock, 'id' | 'entityId'>, entityId?: string) {

        this.description = props.description;
        this.quantity = props.quantity;

        if (!entityId) {
            this.entityId = uuid();
        }
    }
}
