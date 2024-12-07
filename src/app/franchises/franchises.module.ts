import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FranchisesRoutingModule } from './franchises-routing.module';
import { FranchisesTableComponent } from './components/franchises-table/franchises-table.component';
import { FranchisesInsertFormComponent } from './components/franchises-insert-form/franchises-insert-form.component';
import { FranchisesUpdateFormComponent } from './components/franchises-update-form/franchises-update-form.component';
import { FranchisesPageComponent } from './pages/franchises-page/franchises-page.component';

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
    FranchisesTableComponent,
    FranchisesInsertFormComponent,
    FranchisesUpdateFormComponent,
    FranchisesPageComponent
  ],
  imports: [
    CommonModule,
    FranchisesRoutingModule,
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
export class FranchisesModule { }
