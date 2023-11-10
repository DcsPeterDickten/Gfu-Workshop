import { ResolveFn } from '@angular/router';
import { BookDataService } from './book-data.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

export const booksResolver: ResolveFn<Observable<Book[]>> = (route, state) => {
  const bds = inject(BookDataService);
  return bds.getBooks();
};
