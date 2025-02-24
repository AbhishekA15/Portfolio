import { Component } from '@angular/core';
import { ThemeServiceService } from './service/theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeServiceService) {
    // Subscribe to the theme state
    this.themeService.currentMode.subscribe(mode => {
      this.isDarkMode = mode;

      // Apply the dark mode class dynamically
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    });
  }
}
