import uuid from 'uuid-random';

export class Agenda {
    public readonly id!: number;

    public readonly entityId!: string;
    public data: string;
    public employeeId: number;
    public customerId: number;

    constructor(props: Omit<Agenda, 'id' | 'entityId'>, entityId?: string) {

        this.data = props.data;
        this.employeeId = props.employeeId
        this.customerId = props.customerId

        if (!entityId) {
            this.entityId = uuid();
        }
    }
}