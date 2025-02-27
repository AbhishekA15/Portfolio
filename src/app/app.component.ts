import { Component, HostListener } from '@angular/core';
import { ThemeServiceService } from './service/theme-service.service';

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  isDarkMode: boolean | undefined;

  private modalInstance: any = null;

  @HostListener('document:keydown.control.j', ['$event']) // Listen for Ctrl+M
  handleShortcut(event: KeyboardEvent) {
    event.preventDefault()
    this.openModal();
  }

  openModal() {
    const modalElement = document.getElementById('exampleModal');
    if (!this.modalInstance) {
      this.modalInstance = new bootstrap.Modal(modalElement);
    }
    this.modalInstance.show();
  }

  constructor(private themeService: ThemeServiceService) {
    // Subscribe to the theme state
    this.themeService.currentMode.subscribe(mode => {
      this.isDarkMode = mode;
      // Apply the dark mode class dynamically
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    });
  }
}
