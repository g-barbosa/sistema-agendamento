import uuid from 'uuid-random';
import genHashPass from '../../utils/genPassHash'

export class User {
    public readonly id!: number;

    public readonly entityId!: string;
    public name: string;
    public email: string;
    public phone: string;
    public password: string;
    public type: string;

    constructor(props: Omit<User, 'id' | 'entityId'>, entityId?: string) {

        this.name = props.name;
        this.email = props.email;
        this.phone = props.phone;
        this.type = props.type;

        if (!entityId) {
            this.entityId = uuid();
        }

        this.password = genHashPass(props.password);
    }
}