import { Injectable, OnInit } from '@angular/core';
import { Employee } from '../../models/empleado.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeehandlerService implements OnInit {
  empleados: Employee[] = [
    new Employee('Luke', 'Skywalker', 'Developer', 3500),
    new Employee('Obi Wan', 'Kenobi', 'Developer', 3900),
    new Employee('Ahsoka', 'Tano', 'Developer', 4500),
    new Employee('Din', 'Sharen', 'Developer', 13500),
    new Employee('Bo Katan', 'Cruise', 'Developer', 55500),
  ];

  constructor() {}

  ngOnInit(): void {}

  getEmployee(index: number): Employee {
    let aEmployee: Employee;
    aEmployee = this.empleados[index];
    return aEmployee;
  }

  addEmployee(emp: Employee): void {
    this.empleados.push(emp);
  }

  updateEmployee(emp: Employee, index: number): void {
    console.log(emp);
    this.empleados[index].name = emp.name;
    this.empleados[index].surname = emp.surname;
    this.empleados[index].role = emp.role;
    this.empleados[index].salary = emp.salary;
  }

  removeEmployee(index: number): void {
    this.empleados.splice(index, 1);
  }
}
