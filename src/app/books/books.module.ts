import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BookFilterPipe } from './book-filter.pipe';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule } from '@angular/router';

const BOOK_ROUTES = [{ path: 'books', component: BookListComponent }];

@NgModule({
  declarations: [BookListComponent, BookFilterPipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(BOOK_ROUTES),
  ],
  exports: [BookListComponent],
  providers: [],
})
export class BooksModule {}
