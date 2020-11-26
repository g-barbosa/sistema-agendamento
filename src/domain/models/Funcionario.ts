import uuid from 'uuid-random';
import { GenPassHash } from '../../utils/PasswordUtils'

export class Funcionario {
    public readonly id!: number;

    public readonly entityId!: string;
    public name: string;
    public phone: number;
    public login: string;
    public password: string;
    public starts: string;
    public ends: string;

    constructor(props: Omit<Funcionario, 'id' | 'entityId'>, entityId?: string) {

        this.name = props.name;
        this.phone = props.phone;
        this.login = props.login;
        this.password = GenPassHash(props.password);
        this.starts = props.starts;
        this.ends = props.ends;

        if (!entityId) {
            this.entityId = uuid();
        }
    }
}