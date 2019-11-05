import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {CreateBookComponent} from './create-book/create-book.component';


const routes: Routes = [
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'create-book',
    component: CreateBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
