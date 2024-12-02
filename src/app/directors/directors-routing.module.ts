import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorsPageComponent } from './pages/directors-page/directors-page.component';

const routes: Routes = [
  {
    path: "",
    component: DirectorsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorsRoutingModule { }
