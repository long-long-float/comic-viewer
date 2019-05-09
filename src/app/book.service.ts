import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book} from './book'
import { BooksComponent } from './books/books.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = []

  constructor() {
    for (let i = 0; i < 3; i++) {
      this.books.push({ id: i, name: `book${i}`})
    }
  }

  getBooks(): Observable<Book[]> {
    return of(this.books)
  }

  getBook(id: number): Observable<Book> {
    return of(this.books.find(book => book.id === id))
  }
}
