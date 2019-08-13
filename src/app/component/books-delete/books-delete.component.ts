import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books-delete',
  templateUrl: './books-delete.component.html',
  styleUrls: ['./books-delete.component.scss']
})
export class BooksDeleteComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = + this.route.snapshot.paramMap.get('id');
    this.bookService.deleteBook(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

}
