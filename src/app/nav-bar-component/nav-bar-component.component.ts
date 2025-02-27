import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeServiceService } from '../service/theme-service.service';

@Component({
  selector: 'app-nav-bar-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.scss']
})
export class NavBarComponentComponent {
  isDarkMode: boolean | undefined;

  constructor(private themeService: ThemeServiceService) {
    // Subscribe to the theme service to sync the state
    this.themeService.currentMode.subscribe(mode => {
      this.isDarkMode = mode;
    });
  }

  toggleTheme() {
    this.themeService.toggleMode(); // Notify the service to toggle the mode
  }
}
