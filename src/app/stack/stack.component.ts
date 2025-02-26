import { Component } from '@angular/core';
import { ThemeServiceService } from '../service/theme-service.service';
import { StackCardComponent } from '../stack-card/stack-card.component';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [StackCardComponent],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {
}
