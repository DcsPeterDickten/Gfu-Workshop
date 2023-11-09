import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { BookFilterPipe } from './books/book-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { StartComponent } from './shared/start/start.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookFilterPipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
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
