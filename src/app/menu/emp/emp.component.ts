import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Employee } from '../../core/models/empleado.model';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css',
  standalone: true,
  imports: [RouterLink, FormsModule],
})
export class EmpComponent {
  @Input() empleadoSon!: Employee;
  @Input() indexSon!: number;
  @Input() selectedVector!: boolean[];

  @Output() newEvent = new EventEmitter<string>();

  lastSelectedToEdit!: number;

  onCheckboxChange(lastSelected: number): void {
    let valueAsAString: string;
    valueAsAString = lastSelected.toString();

    this.newEvent.emit(valueAsAString);
  }
}
