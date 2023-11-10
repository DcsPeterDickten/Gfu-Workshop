import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BookFilterPipe } from './book-filter.pipe';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule } from '@angular/router';
import { bookGuard } from './book.guard';
import { booksResolver } from './books.resolver';

const BOOK_ROUTES = [
  {
    path: 'books',
    component: BookListComponent,
    canActivate: [bookGuard],
    resolve: { books: booksResolver },
  },
];

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
