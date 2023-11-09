import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BooksModule } from './books/books.module';
import { SharedModule } from './shared/shared.module';
import { StartComponent } from './shared/start/start.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';

const newLocal: Routes = [
  { path: '', component: StartComponent, pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BooksModule,
    SharedModule,
    RouterModule.forRoot(newLocal),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
