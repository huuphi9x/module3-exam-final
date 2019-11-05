import { Component, OnInit } from '@angular/core';
import {IBook} from '../book.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
  book: IBook;
  constructor(
    private route: ActivatedRoute, private bookService: BookService
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getById(id).subscribe(
      next => (this.book = next),
      error => {
        this.book = null;
      }
    );
  }

}
