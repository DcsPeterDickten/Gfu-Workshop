import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`http://localhost:3000/books`);
  }

  deleteBook(isbn: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/books/${isbn}`);
  }

  saveBook(book: Book): Observable<any> {
    return this.http.post(`http://localhost:3000/books`, book);
  }
}
