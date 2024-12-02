import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorTableComponent } from './components/actor-table/actor-table.component';
import { ActorInsertFormComponent } from './components/actor-insert-form/actor-insert-form.component';
import { ActorUpdateFormComponent } from './components/actor-update-form/actor-update-form.component';
import { ActorsPageComponent } from './pages/actors-page/actors-page.component';


@NgModule({
  declarations: [
    ActorTableComponent,
    ActorInsertFormComponent,
    ActorUpdateFormComponent,
    ActorsPageComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule
  ]
})
export class ActorsModule { }
