import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent {
  dob: string =' ';
  age: number | null = null;

  calculateAge(): void {
    if (this.dob) {
      const today = new Date();
      const birthDate = new Date(this.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.age = age;
    } else {
      this.age = null;
    }
  }
}