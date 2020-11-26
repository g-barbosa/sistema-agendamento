import uuid from 'uuid-random';

export class User {
    public id: number;
    public entityId: string;
    public name: string;
    public phone: number;
    public login: string;
    public password: string;

    constructor(props: User) {

        this.id = props.id;
        this.entityId = props.entityId;
        this.name = props.name;
        this.phone = props.phone;
        this.login = props.login;
        this.password = props.password
    }
}