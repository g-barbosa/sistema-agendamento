import { Scheduling } from "../domain/models/Scheduling";

export interface ISchedulingRepository {
    create(scheduling: Scheduling): Promise<Number[]>;
    get(): Promise<Scheduling[]>;
    delete(id: string): Promise<void>;
}