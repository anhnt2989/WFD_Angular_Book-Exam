import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BooksHomeComponent} from './component/books-home/books-home.component';
import {BooksDetailComponent} from './component/books-detail/books-detail.component';
import {BooksUpdateComponent} from './component/books-update/books-update.component';
import {BooksDeleteComponent} from './component/books-delete/books-delete.component';
import {BooksAddComponent} from './component/books-add/books-add.component';


const routes: Routes = [
  {
    path: 'books',
    component: BooksHomeComponent
  },
  {
    path: 'books/:id',
    component: BooksDetailComponent
  },
  {
    path: 'books/:id/update',
    component: BooksUpdateComponent
  },
  {
    path: 'books/:id/delete',
    component: BooksDeleteComponent
  },
  {
    path: 'books/add',
    component: BooksAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
