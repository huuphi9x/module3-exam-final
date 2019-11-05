import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  data: FormGroup;
  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router) { }

  ngOnInit() {

    this.data = this.fb.group({
      title: '',
      author: '',
      description: ''
    })
    ;
  }
  addBook() {
    this.bookService.createBook(this.data.value).subscribe(next => {
      this.router.navigate(['/books']);
    });
  }

}
