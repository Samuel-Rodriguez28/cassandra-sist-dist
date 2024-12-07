import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DirectorService } from '../../services/director-service/director.service';
import { DirectorsInsertFormComponent } from '../directors-insert-form/directors-insert-form.component';
import { DirectorsUpdateFormComponent } from '../directors-update-form/directors-update-form.component';

@Component({
  selector: 'app-directors-table',
  templateUrl: './directors-table.component.html',
  styleUrl: './directors-table.component.scss',
  providers: [DialogService, ConfirmationService, MessageService]
})
export class DirectorsTableComponent implements OnInit, OnDestroy {
  constructor(
    private director: DirectorService,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  private unsubscribe$ = new Subject<void>();
  @ViewChild('dt2') dt2!: Table;
  ref: DynamicDialogRef | undefined;

  directors: any[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.getDirectorsData()
  }

  getDirectorsData() {
    this.loading = true;
    this.director.getAllDirectors().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        console.log(response);
        this.directors = JSON.parse(response.body);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      }
    })
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    const value = target?.value || ''; // Manejar el caso de null
    this.dt2.filterGlobal(value, 'contains');
  }

  openDirectorDeleteDialog(event: Event, id: any){
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
        this.director.deleteDirector(id).pipe(takeUntil(this.unsubscribe$)).subscribe({
          next: (response) => {
            console.log(response);
            this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Registro eliminado' });
          },
          error: (error) => {
            console.error(error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el registro' });
          },
          complete: () => {
            this.getDirectorsData();
          }
        })
      },
      reject: () => {}
  });
  }

  openNewDirectorForm(){
    this.ref = this.dialogService.open(DirectorsInsertFormComponent, 
      { 
        header: 'Nuevo Director',
        width: '30%'
      }
    );

    this.ref.onClose.subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Actor registrado' });
      this.getDirectorsData();
    });
  }

  openUpdateDirectorForm(id: any){
    this.ref = this.dialogService.open(DirectorsUpdateFormComponent, 
      { 
        header: 'Actualizar Director',
        width: '30%',
        data: {
          id: id
        }
      }
    );

    this.ref.onClose.subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Director actualizado' });
      this.getDirectorsData();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
