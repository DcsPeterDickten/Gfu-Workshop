import { Component } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  coverIsVisible: boolean = true;
  books = [
    {
      isbn: '12345',
      title: 'Angular 16',
      price: 12.23,
      rating: 4.5,
      coverUrl:
        'https://m.media-amazon.com/images/I/71Wv+d6oP6L._AC_UY436_QL65_.jpg',
    },
    {
      isbn: '12346',
      title: 'Angular 17',
      price: 19.23,
      rating: 4.7,
      coverUrl:
        'https://m.media-amazon.com/images/I/71UdanWaD-L._AC_UY436_QL65_.jpg',
    },
  ];
  filterwert = '';

  getId(index: number, book: any) {
    return book.isbn;
  }

  isOnDiscount(book: any) {
    return book.price < 10;
  }

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }
}
