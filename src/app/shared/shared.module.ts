import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RatingComponent } from './rating/rating.component';
import { StartComponent } from './start/start.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    RatingComponent,
    WelcomeComponent,
    StartComponent,
  ],
  imports: [BrowserModule, FormsModule],
  exports: [RatingComponent, WelcomeComponent, StartComponent],
  providers: [],
})
export class SharedModule {}
