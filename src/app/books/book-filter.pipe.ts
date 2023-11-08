import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[], filterwert: string): Book[] {
    const suchwert = (filterwert || '').toLowerCase();
    return books.filter((book) => book.title.toLowerCase().includes(suchwert));
  }
}
