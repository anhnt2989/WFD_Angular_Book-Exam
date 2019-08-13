import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-books-update',
  templateUrl: './books-update.component.html',
  styleUrls: ['./books-update.component.scss']
})
export class BooksUpdateComponent implements OnInit {
  book: Book;
  sub: Subscription;
  bookUpdateForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute, private bookService: BookService,
              private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.bookUpdateForm = this.formBuilder.group({
      title: [''],
      author: [''],
      description: ['']
    });
    this.sub = this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.getBookById(Number(id))
        .subscribe(next => {
          this.book = next;
          this.bookUpdateForm.patchValue(next);
        });
    });
  }

  updateBook() {
    if (this.bookUpdateForm.valid) {
      const {value} = this.bookUpdateForm;
      const data = {
        ...this.book,
        ...value
      };
      this.bookService.updateBook(data)
        .subscribe(next => {
          this.router.navigateByUrl('/books');
        });
    }
  }
}
