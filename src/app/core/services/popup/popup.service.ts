import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() {}

  popUp(message: string): void {
    alert(message);
  }
}
