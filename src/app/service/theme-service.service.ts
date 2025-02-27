import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {

  private darkMode = new BehaviorSubject<boolean>(localStorage.getItem("theme") === "dark"); // Default to light mode
  currentMode = this.darkMode.asObservable();

  toggleMode() {
    this.darkMode.next(!this.darkMode.value); // Toggle the value
    this.isDarkMode ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark")
  }

  get isDarkMode(): boolean {
    // return this.darkMode.value;
    return localStorage.getItem("theme") === "dark"
  }

  constructor() { }
}
