import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss']
})
export class BooksDetailComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // const id = + this.route.snapshot.paramMap.get('id');
    // this.bookService.getBookById(id).subscribe(
    //   // next => (this.book = next),
    //   error => {
    //     console.log(error);
    //     this.book = null;
    //   }
    // );
  }

}
