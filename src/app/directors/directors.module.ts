import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorsRoutingModule } from './directors-routing.module';
import { DirectorsPageComponent } from './pages/directors-page/directors-page.component';
import { DirectorsInsertFormComponent } from './components/directors-insert-form/directors-insert-form.component';
import { DirectorsUpdateFormComponent } from './components/directors-update-form/directors-update-form.component';
import { DirectorsTableComponent } from './components/directors-table/directors-table.component';

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

@NgModule({
  declarations: [
    DirectorsPageComponent,
    DirectorsInsertFormComponent,
    DirectorsUpdateFormComponent,
    DirectorsTableComponent
  ],
  imports: [
    CommonModule,
    DirectorsRoutingModule,
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
    ProgressBarModule
  ]
})
export class DirectorsModule { }
