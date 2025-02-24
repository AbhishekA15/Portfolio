import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  private darkMode = new BehaviorSubject<boolean>(false); // Default to light mode
  currentMode = this.darkMode.asObservable();

  toggleMode() {
    this.darkMode.next(!this.darkMode.value); // Toggle the value
  }

  get isDarkMode(): boolean {
    return this.darkMode.value;
  }

  constructor() { }
}
