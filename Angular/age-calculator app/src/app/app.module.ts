import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Add this line

import { AppComponent } from './app.component';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    AgeCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // <-- Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
