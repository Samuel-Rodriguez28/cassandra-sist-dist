import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MoviesUpdateFormComponent } from './components/movies-update-form/movies-update-form.component';
import { MoviesInsertFormComponent } from './components/movies-insert-form/movies-insert-form.component';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';


@NgModule({
  declarations: [
    MoviesPageComponent,
    MoviesUpdateFormComponent,
    MoviesInsertFormComponent,
    MoviesTableComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
