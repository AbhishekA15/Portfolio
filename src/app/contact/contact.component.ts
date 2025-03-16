import { Component } from '@angular/core';
import { ThemeServiceService } from '../service/theme-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']

})


export class ContactComponent {
  isDarkMode: boolean | undefined;
  greetings: string[] = ["Hi", "नमस्ते", "Hola", "Hallo", "سلام"];
  currentGreeting: String = '';
  greetIndex: number = 0;
  successFlag: boolean = false;
  errorFlag: boolean = false;
  form: FormGroup;

  constructor(private themeService: ThemeServiceService, private fb: FormBuilder, private http: HttpClient) {
    this.greeting();
    // Subscribe to the theme service to sync the state
    this.themeService.currentMode.subscribe(mode => {
      this.isDarkMode = mode;
    });

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      access_key: ['99b0b838-95f0-4899-8a2e-0ccb25193c77']
    });
  }

  greeting(): void {
    this.currentGreeting = this.greetings[this.greetIndex];
    setInterval(() => {
      this.greetIndex = (this.greetIndex + 1) % this.greetings.length;
      this.currentGreeting = this.greetings[this.greetIndex];
    }, 2000); // Switch every 2 seconds
  }

  alert(flag: boolean): void {
    if (flag) {
      this.successFlag = true;
      setTimeout(() => {
        this.successFlag = false;
      }, 5000)
    }
    else {
      this.errorFlag = true;
      setTimeout(() => {
        this.errorFlag = false;
      }, 5000)
    }

  }

  onSubmit() {
    if (this.form.valid) {
      const formData = new FormData();

      // Append form data
      Object.keys(this.form.value).forEach((key) =>
        formData.append(key, this.form?.value[key])
      );

      // Make the HTTP request
      this.http
        .post('https://api.web3forms.com/submit', formData)
        .subscribe({
          next: () => {
            this.alert(true)
            this.form.reset(); // Clear the form fields
          },
          error: (error) => {
            this.alert(false)
          },
        });
    }
  }

}
