import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone: true,
  imports: [RouterLink],
})
export class FooterComponent {
  constructor(private miRute: Router) {}

  goToHome(target: string) {
    this.miRute.navigate([target]);
  }
}
