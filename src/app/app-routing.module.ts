import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookViewerComponent } from './book-viewer/book-viewer.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'view/:id', component: BookViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
