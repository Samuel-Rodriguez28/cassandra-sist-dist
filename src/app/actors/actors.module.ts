import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorTableComponent } from './components/actor-table/actor-table.component';
import { ActorInsertFormComponent } from './components/actor-insert-form/actor-insert-form.component';
import { ActorUpdateFormComponent } from './components/actor-update-form/actor-update-form.component';
import { ActorsPageComponent } from './pages/actors-page/actors-page.component';

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
    ActorTableComponent,
    ActorInsertFormComponent,
    ActorUpdateFormComponent,
    ActorsPageComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule,
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
export class ActorsModule { }
