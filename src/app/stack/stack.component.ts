import { Component } from '@angular/core';
import { ThemeServiceService } from '../service/theme-service.service';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [FooterComponent,CommonModule],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeServiceService) {
      // Subscribe to the theme service to sync the state
      this.themeService.currentMode.subscribe(mode => {
        this.isDarkMode = mode;
      });
    }
}
