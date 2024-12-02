import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(h => h.HomeModule)
  },
  {
    path: "actors",
    loadChildren: () => import('./actors/actors.module').then(a => a.ActorsModule)
  },
  {
    path: "franchises",
    loadChildren: () => import('./franchises/franchises.module').then(f => f.FranchisesModule)
  },
  {
    path: "directors",
    loadChildren: () => import('./directors/directors.module').then(d => d.DirectorsModule)
  },
  {
    path: "movies",
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
