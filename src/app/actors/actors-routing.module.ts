import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsPageComponent } from './pages/actors-page/actors-page.component';

const routes: Routes = [
  {
    path: "",
    component: ActorsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
