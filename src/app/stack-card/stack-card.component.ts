import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ThemeServiceService } from '../service/theme-service.service';

@Component({
  selector: 'app-stack-card',
  templateUrl: './stack-card.component.html',
  styleUrls: ['./stack-card.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class StackCardComponent {
  @Input() Tech='';
  @Input() TechDescription='';
  @Input() TechImg='';
  @Input() TechLink='';
  @Input() Shorthand=false; 

  isDarkMode: boolean = false;

  constructor(private themeService: ThemeServiceService) {
      // Subscribe to the theme service to sync the state
      this.themeService.currentMode.subscribe(mode => {
        this.isDarkMode = mode;
      });
    }
}
