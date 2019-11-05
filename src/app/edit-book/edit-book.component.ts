import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IBook} from '../book.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  data: FormGroup;
  book: IBook;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.data = this.fb.group({
      id: '',
      title: '',
      author: '',
      description: ''
    })
    ;
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getById(id).subscribe(
      next => {
        this.book = next;
        this.data.patchValue(this.book);
      },
      error => {
        this.book = null;
      }
    );
  }
  editBook() {
    this.bookService.updateBook(this.data.value).subscribe(next => {
      this.router.navigate(['/books']);
    });
  }

}
