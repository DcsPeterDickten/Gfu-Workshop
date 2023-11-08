import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './shared/calculator/calculator.component';
import { BookFilterPipe } from './books/book-filter.pipe';
import { RatingComponent } from './shared/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { StartComponent } from './shared/start/start.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CalculatorComponent,
    BookFilterPipe,
    RatingComponent,
    WelcomeComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: StartComponent, pathMatch: 'full' },
      { path: 'books', component: BookListComponent },
      { path: 'welcome', component: WelcomeComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
