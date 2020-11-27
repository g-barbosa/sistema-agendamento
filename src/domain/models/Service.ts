import uuid from 'uuid-random';

export class Service {
    public readonly id!: number;

    public readonly entityId!: string;
    public description: string;
    public value: number;

    constructor(props: Omit<Service, 'id' | 'entityId'>, entityId?: string) {

        this.description = props.description;
        this.value = props.value;

        if (!entityId) {
            this.entityId = uuid();
        }
    }
}