import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorsRoutingModule } from './directors-routing.module';
import { DirectorsPageComponent } from './pages/directors-page/directors-page.component';
import { DirectorsInsertFormComponent } from './components/directors-insert-form/directors-insert-form.component';
import { DirectorsUpdateFormComponent } from './components/directors-update-form/directors-update-form.component';
import { DirectorsTableComponent } from './components/directors-table/directors-table.component';


@NgModule({
  declarations: [
    DirectorsPageComponent,
    DirectorsInsertFormComponent,
    DirectorsUpdateFormComponent,
    DirectorsTableComponent
  ],
  imports: [
    CommonModule,
    DirectorsRoutingModule
  ]
})
export class DirectorsModule { }
