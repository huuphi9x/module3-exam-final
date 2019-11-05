import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {IBook} from '../book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [BookService]
})
export class BookComponent implements OnInit {
  output: IBook[];
  info: IBook;
  constructor(private bookService: BookService) {
    this.bookService.getBook().subscribe(next => {
      this.output = next;
    });
  }

  ngOnInit() {
  }
  editBook(i: number) {
    this.bookService.getById(i).subscribe(data => {
      this.info = data;
    });
  }

  deleteBook(i: number) {
    this.bookService.deleteBook(i).subscribe(() => {
      this.output = this.output.filter(t => t.id !== i);
    }, this.errorHandle);
  }
  errorHandle(error: any) {
    alert('Can not delete book, contact admin for more information');
  }
}
