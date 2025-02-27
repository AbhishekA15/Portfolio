import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeServiceService } from '../service/theme-service.service';
import { StackCardComponent } from "../stack-card/stack-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, StackCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isDarkMode: boolean | undefined;

  constructor(private themeService: ThemeServiceService) {
    // Subscribe to the theme service to sync the state
    this.themeService.currentMode.subscribe(mode => {
      this.isDarkMode = mode;
    });
  }
}
