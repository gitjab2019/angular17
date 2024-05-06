export class Employee {
  name: string = '';
  surname!: string;
  salary: number = 0;
  role!: string;

  constructor(gName: string, gSurname: string, gRole: string, gSalary: number) {
    this.name = gName;
    this.surname = gSurname;
    this.role = gRole;
    this.salary = gSalary;
  }
}
