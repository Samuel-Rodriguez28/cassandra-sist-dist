import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FranchisesPageComponent } from './pages/franchises-page/franchises-page.component';

const routes: Routes = [
  {
    path: "",
    component: FranchisesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FranchisesRoutingModule { }
