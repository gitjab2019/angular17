import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../core/models/empleado.model';
import { EmployeehandlerService } from '../../core/services/employee/employeehandler.service';

@Component({
  selector: 'app-editempleado',
  templateUrl: './editempleado.component.html',
  styleUrl: './editempleado.component.css',
  standalone: true,
  imports: [FormsModule],
})
export default class EditempleadoComponent implements OnInit {
  index!: number;
  aEmp!: Employee;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected miEmpService: EmployeehandlerService
  ) {}

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.aEmp = this.miEmpService.getEmployee(this.index);
  }

  updateRegister(): void {
    this.miEmpService.updateEmployee(this.aEmp, this.index);
    this.router.navigate(['']);
  }

  deleteRegister(): void {
    this.miEmpService.removeEmployee(this.index);
    this.router.navigate(['']);
  }
}
