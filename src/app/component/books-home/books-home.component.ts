import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-books-home',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.scss']
})
export class BooksHomeComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService, private route: ActivatedRoute) {
    this.books = this.bookService.bookList;
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(next => (this.books = next), error => (this.books = []));
  }
}

