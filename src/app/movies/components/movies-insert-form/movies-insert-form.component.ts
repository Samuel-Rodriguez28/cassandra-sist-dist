import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MovieService } from '../../services/movie-service/movie.service';

@Component({
  selector: 'app-movies-insert-form',
  templateUrl: './movies-insert-form.component.html',
  styleUrl: './movies-insert-form.component.scss'
})
export class MoviesInsertFormComponent implements OnInit, OnDestroy {
  constructor(
    private ref: DynamicDialogRef,
    private movie: MovieService
  ){}

  private unsubscribe$ = new Subject<void>();
  loading: boolean = false;
  name: any = "";
  directors: any[] = [];
  selectedDirectors: any[] = [];
  actors: any[] = [];
  selectedActors: any[] = [];
  franchises: any[] = [];
  selectedFranchise: any | null = null;
  synopsis: any = "";
  release_date: number | null = null;

  ngOnInit(): void {
    this.loading = true;
    this.getAllActors();
    this.getAllDirectors();
    this.getAllFranchises();
  }

  getAllActors(){
    this.movie.getAllActors().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        console.log("Actors:", JSON.parse(response.body));
        let parsedResponse = JSON.parse(response.body);
        this.actors = parsedResponse.map((actor: any) => {
          return {
            name: actor.name + " " + actor.last_name
          }
        })
        console.log(this.actors);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  getAllDirectors(){
    this.movie.getAllDirectors().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        console.log("Directors:", JSON.parse(response.body));
        let parsedResponse = JSON.parse(response.body);
        this.directors = parsedResponse.map((director: any) => {
          return {
            name: director.name + " " + director.last_name
          }
        })
        console.log(this.directors);
      },
      error: (error) => {
        console.error();
      }
    })
  }

  getAllFranchises(){
    this.movie.getAllFranchises().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        console.log("Franchises", JSON.parse(response.body));
        let parsedResponse = JSON.parse(response.body);
        this.franchises = parsedResponse.map((franchise: any) => {
          return {
            name: franchise.name
          }
        })
        console.log(this.franchises);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.loading = false;
      }
    })
  }

  checkDisabled(){
    return (this.name.length === 0 || 
          this.synopsis.length === 0 || 
          this.selectedActors === null || 
          this.selectedDirectors === null ||
          this.selectedFranchise === null ||
          this.release_date === null) ?
          true :
          false;
  }

  insertMovie(){
    this.loading = true;



    let data = {
      id: uuid(),
      name: this.name,
      franchise: this.selectedFranchise.name,
      directors: this.selectedDirectors.map((director: any) => director.name),
      synopsis: this.synopsis,
      actors: this.selectedActors.map((actor: any) => actor.name),
      release_date: this.release_date
    }

    this.movie.insertMovie(data).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.ref.close();
      }
    })

    console.log(data);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
