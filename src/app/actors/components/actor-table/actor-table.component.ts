import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActorService } from '../../services/actor-sservice/actor.service';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActorInsertFormComponent } from '../actor-insert-form/actor-insert-form.component';
import { ActorUpdateFormComponent } from '../actor-update-form/actor-update-form.component';

@Component({
  selector: 'app-actor-table',
  templateUrl: './actor-table.component.html',
  styleUrl: './actor-table.component.scss',
  providers: [DialogService, ConfirmationService, MessageService]
})
export class ActorTableComponent implements OnInit, OnDestroy{
  constructor(
    private actor: ActorService,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ){}

  private unsubscribe$ = new Subject<void>();
  @ViewChild('dt2') dt2!: Table;
  ref: DynamicDialogRef | undefined;

  actors: any[] = [];
  loading: boolean = false;
  
  ngOnInit(): void {
    this.getActorsData();
  }

  getActorsData(){
    this.loading = true;
    this.actor.getAllActors().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        this.actors = JSON.parse(response.body);
        console.log(this.actors);
      },
      error: (error) => {
        console.error(error)
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

  openNewActorForm(){
    this.ref = this.dialogService.open(ActorInsertFormComponent, 
      { 
        header: 'Nuevo Actor',
        width: '30%'
      }
    );

    this.ref.onClose.subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Actor registrado' });
      this.getActorsData();
    });
  }

  openUpdateActorForm(id: any){
    this.ref = this.dialogService.open(ActorUpdateFormComponent, 
      { 
        header: 'Actualizar Actor',
        width: '30%',
        data: {
          id: id
        }
      }
    );

    this.ref.onClose.subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Actor actualizado' });
      this.getActorsData();
    });
  }

  openActorDeleteDialog(event: Event, id: any){
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
        this.actor.deleteActor(id).pipe(takeUntil(this.unsubscribe$)).subscribe({
          next: (response) => {
            console.log(response);
            this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Registro eliminado' });
          },
          error: (error) => {
            console.error(error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el registro' });
          },
          complete: () => {
            this.getActorsData();
          }
        })
      },
      reject: () => {}
  });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
