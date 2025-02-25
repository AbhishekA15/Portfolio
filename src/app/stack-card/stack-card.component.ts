import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-card',
  templateUrl: './stack-card.component.html',
  styleUrls: ['./stack-card.component.scss'],
  standalone:true
})
export class StackCardComponent {
  @Input() Tech='';
  @Input() TechDescription='';
  @Input() TechImg='';
  @Input() TechLink='';
  @Input() Shorthand=false; 
}
