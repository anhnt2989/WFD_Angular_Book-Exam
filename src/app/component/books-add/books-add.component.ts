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
  bookForm: FormGroup;

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
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }
  doAdd() {
    if (this.bookForm.valid) {
      this.bookService.createBook(this.book).subscribe();
      this.router.navigateByUrl('/books');
    }
  }

}
