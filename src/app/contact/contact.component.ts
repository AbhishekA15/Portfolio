import { Component } from '@angular/core';
import { ThemeServiceService } from '../service/theme-service.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isDarkMode: boolean = false;
  
    constructor(private themeService: ThemeServiceService) {
      // Subscribe to the theme service to sync the state
      this.themeService.currentMode.subscribe(mode => {
        this.isDarkMode = mode;
      });
    }
}
