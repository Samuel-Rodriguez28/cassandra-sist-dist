import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MoviesUpdateFormComponent } from './components/movies-update-form/movies-update-form.component';
import { MoviesInsertFormComponent } from './components/movies-insert-form/movies-insert-form.component';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    MoviesPageComponent,
    MoviesUpdateFormComponent,
    MoviesInsertFormComponent,
    MoviesTableComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ButtonModule,
    InputTextModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    TableModule,
    DividerModule,
    IconFieldModule,
    InputIconModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
    MultiSelectModule,
    InputTextareaModule,
    InputNumberModule,
    DropdownModule
  ]
})
export class MoviesModule { }
