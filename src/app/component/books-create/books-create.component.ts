import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.scss']
})
export class BooksCreateComponent implements OnInit {
  bookCreateForm: FormGroup;
  constructor(private bookService: BookService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.bookCreateForm = this.formBuilder.group({
      title: ['', Validators.required, Validators.minLength(10)],
      author: ['', Validators.required, Validators.minLength(10)],
      description: ['']
    });
  }

  createBook() {
    if (this.bookCreateForm.valid) {
      const {value} = this.bookCreateForm;
      this.bookService.createBook(value)
        .subscribe(next => {
          this.bookService.bookList.push(next);
          this.bookCreateForm.reset({
            title: '',
            author: '',
            description: ''
          });
          this.router.navigateByUrl('/books');
        });
    }
  }
}
