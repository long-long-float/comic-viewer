import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-viewer',
  templateUrl: './book-viewer.component.html',
  styleUrls: ['./book-viewer.component.sass']
})
export class BookViewerComponent implements OnInit {

  book: Book

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { 
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.bookService.getBook(id).subscribe(book => {
      this.book = book
    })
  }

}
