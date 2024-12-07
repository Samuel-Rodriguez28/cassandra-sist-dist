import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MovieService } from '../../services/movie-service/movie.service';
import { MoviesInsertFormComponent } from '../movies-insert-form/movies-insert-form.component';
import { MoviesUpdateFormComponent } from '../movies-update-form/movies-update-form.component';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrl: './movies-table.component.scss',
  providers: [DialogService, ConfirmationService, MessageService]
})
export class MoviesTableComponent implements OnInit, OnDestroy{
  constructor(
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private movie: MovieService
  ) { }

  private unsubscribe$ = new Subject<void>();
  @ViewChild('dt2') dt2!: Table;
  ref: DynamicDialogRef | undefined;

  movies: any[] = [];
  loading: boolean = false;
  
  ngOnInit(): void {
    this.getMoviesData();
  }

  getMoviesData(){
    this.loading = true;

    this.movie.getAllMovies().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        console.log(response);
        let parsedResponse = JSON.parse(response.body);
        this.movies = parsedResponse;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.loading = false;
      }
    })
  }

  openNewMovieForm(){
    this.ref = this.dialogService.open(MoviesInsertFormComponent, 
      { 
        header: 'Nueva Pelicula',
        width: '30%',
        height: '90%'
      }
    );

    this.ref.onClose.subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Registro insertado' });
      this.getMoviesData();
    });
  }

  openUpdateMovieForm(id: any){
    this.ref = this.dialogService.open(MoviesUpdateFormComponent, 
      { 
        header: 'Actualizar Pelicula',
        width: '30%',
        data: {
          id: id
        }
      }
    );

    this.ref.onClose.subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Registro actualizado' });
      this.getMoviesData();
    });
  }

  formatTextArray(array: any[]){
    let textList = "";

    array.map((element: any, index: any) => {
      if(index === (array.length - 1)){
        textList += element;
      }else{
        textList += element + ", ";
      }
    })

    return textList;
  }

  openMovieDeleteDialog(event: Event, id: any){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Quieres eliminar este registro?',
      header: 'Confirmar Eliminación',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",
      acceptLabel: 'Si',
      rejectLabel: 'No',
      accept: () => {
        this.loading = true;
        this.movie.deleteMovie(id).pipe(takeUntil(this.unsubscribe$)).subscribe({
          next: (response) => {
            console.log(response);
            this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Registro eliminado' });
          },
          error: (error) => {
            console.error(error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el registro' });
          },
          complete: () => {
            this.getMoviesData();
          }
        })
      },
      reject: () => {}
  });
  }
  
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    const value = target?.value || ''; // Manejar el caso de null
    this.dt2.filterGlobal(value, 'contains');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
