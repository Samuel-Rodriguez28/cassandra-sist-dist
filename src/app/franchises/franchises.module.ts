import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FranchisesRoutingModule } from './franchises-routing.module';
import { FranchisesTableComponent } from './components/franchises-table/franchises-table.component';
import { FranchisesInsertFormComponent } from './components/franchises-insert-form/franchises-insert-form.component';
import { FranchisesUpdateFormComponent } from './components/franchises-update-form/franchises-update-form.component';
import { FranchisesPageComponent } from './pages/franchises-page/franchises-page.component';


@NgModule({
  declarations: [
    FranchisesTableComponent,
    FranchisesInsertFormComponent,
    FranchisesUpdateFormComponent,
    FranchisesPageComponent
  ],
  imports: [
    CommonModule,
    FranchisesRoutingModule
  ]
})
export class FranchisesModule { }
