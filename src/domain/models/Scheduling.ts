import uuid from 'uuid-random';

export class Scheduling {
    public readonly id!: number;

    public readonly entityId!: string;
    public productId: number;
    public serviceId: number;
    public AgendaId: number;

    constructor(props: Omit<Scheduling, 'id' | 'entityId'>, entityId?: string) {

        this.productId = props.productId;
        this.serviceId = props.serviceId
        this.AgendaId = props.AgendaId

        if (!entityId) {
            this.entityId = uuid();
        }
    }
}