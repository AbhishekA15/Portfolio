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
  isDarkMode: boolean|undefined;
  greetings:string[]=["Hi","नमस्ते","Hola","Hallo","سلام"];
  currentGreeting:String='';
  greetIndex:number=0;
  alertFlag:boolean=false;

  constructor(private themeService: ThemeServiceService) {
    this.greeting();
    // Subscribe to the theme service to sync the state
    this.themeService.currentMode.subscribe(mode => {
      this.isDarkMode = mode;
    });
  }

  greeting(): void {
    this.currentGreeting = this.greetings[this.greetIndex];
    setInterval(() => {
      this.greetIndex = (this.greetIndex + 1) % this.greetings.length;
      this.currentGreeting = this.greetings[this.greetIndex];
    }, 2000); // Switch every 2 seconds
  }

  alert():void{
    this.alertFlag=true;
    setTimeout(()=>{
      this.alertFlag=false;
    },5000)
  }

}
