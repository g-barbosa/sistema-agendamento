import { IEmployeeRepository } from '../repositories/IEmployeeRepository'
import { ICreateEmployeeRequestDTO } from '../domain/DTO/EmployeesDTO';
import { Employee } from '../domain/models/Employee';
import { ConvertTime, GenNewDate } from '../utils/ConvertingTime'

export class EmployeesService {
    
    constructor ( 
        private employeeRepository: IEmployeeRepository
        ){}

    async create(employeeData: ICreateEmployeeRequestDTO) {

        var starts = GenNewDate(employeeData.starts)
        var ends = GenNewDate(employeeData.ends)

        employeeData.starts = starts
        employeeData.ends = ends
        const employee = new Employee(employeeData);

        await this.employeeRepository.create(employee);
    }

    async getAll() {
        const employee: Employee[] = await this.employeeRepository.get()
        employee.forEach(f => {
            f.starts = ConvertTime(f.starts, true)
            f.ends = ConvertTime(f.ends, true)
        })
        return employee
    }

    async getById(id: string) {
        const employee: Employee = await this.employeeRepository.getById(id)
        employee.starts = ConvertTime(employee.starts, false)
        employee.ends = ConvertTime(employee.ends, false)

        return employee
    }

    async update(employeeData: ICreateEmployeeRequestDTO, id: string) {
        const customerAlreadyExists = await this.employeeRepository.getById(id);

        if (!customerAlreadyExists) throw new Error('employee não encontrado.');

        var starts = GenNewDate(employeeData.starts)
        var ends = GenNewDate(employeeData.ends)

        employeeData.starts = starts
        employeeData.ends = ends

        const employee = new Employee(employeeData);

        await this.employeeRepository.update(employee, id);
    }

    async delete(id: string) {
        const customerAlreadyExists = await this.employeeRepository.getById(id);

        if (!customerAlreadyExists) throw new Error('employee não encontrado.');

        await this.employeeRepository.delete(id);
    }
}
