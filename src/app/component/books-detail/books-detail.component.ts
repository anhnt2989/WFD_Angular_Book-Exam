import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss']
})
export class BooksDetailComponent implements OnInit {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };
  sub: Subscription;

  constructor(private bookService: BookService, private activeRoute: ActivatedRoute) {
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

}
