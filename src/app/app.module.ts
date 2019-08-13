import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BooksHomeComponent} from './component/books-home/books-home.component';
import {BooksCreateComponent} from './component/books-create/books-create.component';
import {BooksDetailComponent} from './component/books-detail/books-detail.component';
import {BooksUpdateComponent} from './component/books-update/books-update.component';
import {BooksDeleteComponent} from './component/books-delete/books-delete.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BooksHomeComponent,
    BooksDetailComponent,
    BooksUpdateComponent,
    BooksDeleteComponent,
    BooksCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
