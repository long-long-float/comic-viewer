import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book} from './book'
import { BooksComponent } from './books/books.component';
import { config } from './config'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = []

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get(`${config.contentsServer}/catalog.json`).pipe(
      map((data: Object[]) => {
        const books = data.map((d, id) => new Book(id, d['author'], d['title'], d['pages']))
        this.books = books

        return books
      })
    )
  }

  getBook(id: number): Observable<Book> {
    return of(this.books[id])
  }
}
