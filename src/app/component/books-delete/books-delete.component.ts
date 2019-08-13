import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-books-delete',
  templateUrl: './books-delete.component.html',
  styleUrls: ['./books-delete.component.scss']
})
export class BooksDeleteComponent implements OnInit {
  book: Book;
  sub: Subscription;

  constructor(private bookService: BookService, private router: Router, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.getBookById(Number(id))
        .subscribe(next => {
          this.book = next;
        });
    });
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.id).subscribe(
      () => {
        this.router.navigateByUrl('/books');
      });
  }

}
