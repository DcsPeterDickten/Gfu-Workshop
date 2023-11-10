import { Component, ViewEncapsulation } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {
  books: Book[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookDataService: BookDataService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log({ data });
      this.books = data['books'];
    });
  }

  coverIsVisible: boolean = true;

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

  plusClicked(idGeklicktesBuch: string) {
    console.log({ event: idGeklicktesBuch });
    const book = this.books.find((book) => book.isbn === idGeklicktesBuch);
    if (book) {
      book.rating += 0.1;
    }
    console.log({ book });
  }

  deleteBook(isbn: string) {
    this.bookDataService.deleteBook(isbn).subscribe(() => {
      this.bookDataService.getBooks().subscribe((books) => {
        this.books = books;
      });
    });
  }
}
