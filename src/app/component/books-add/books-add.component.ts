import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.scss']
})
export class BooksAddComponent implements OnInit {
  book: Book;
  bookCreateForm: FormGroup;

  constructor(private bookService: BookService, private fb: FormBuilder, private router: Router,
              private route: ActivatedRoute) {
    this.book = {
      id: +'',
      title: '',
      author: '',
      description: ''
    };
  }

  ngOnInit() {
    this.bookCreateForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      author: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', ]
    });
  }
  onSubmit() {
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
