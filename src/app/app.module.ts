import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksAddComponent } from './component/books-add/books-add.component';
import { BooksHomeComponent } from './component/books-home/books-home.component';
import { BooksDetailComponent } from './component/books-detail/books-detail.component';
import { BooksUpdateComponent } from './component/books-update/books-update.component';
import { BooksDeleteComponent } from './component/books-delete/books-delete.component';
import {MDBBootstrapModule, MdbTableService} from 'angular-bootstrap-md';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BooksAddComponent,
    BooksHomeComponent,
    BooksDetailComponent,
    BooksUpdateComponent,
    BooksDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
