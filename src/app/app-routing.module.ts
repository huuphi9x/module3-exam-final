import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {DetailBookComponent} from './detail-book/detail-book.component';


const routes: Routes = [
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'create-book',
    component: CreateBookComponent
  },
  {
    path: 'edit-book/:id',
    component: EditBookComponent
  },
  {
    path: 'detail-book/:id',
    component: DetailBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
