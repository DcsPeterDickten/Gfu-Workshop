import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { RatingComponent } from './rating/rating.component';
import { StartComponent } from './start/start.component';
import { WelcomeComponent } from './welcome/welcome.component';

const SHARED_ROUTES: Routes = [
  { path: '', component: StartComponent, pathMatch : 'full' }, //
  { path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  declarations: [
    CalculatorComponent,
    RatingComponent,
    WelcomeComponent,
    StartComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forChild(SHARED_ROUTES)],
  exports: [RatingComponent, WelcomeComponent, StartComponent],
  providers: [],
})
export class SharedModule {}
