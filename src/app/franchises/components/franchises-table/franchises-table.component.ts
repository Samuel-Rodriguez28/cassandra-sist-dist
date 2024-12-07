import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FranchiseService } from '../../services/franchise-service/franchise.service';
import { FranchisesInsertFormComponent } from '../franchises-insert-form/franchises-insert-form.component';
import { FranchisesUpdateFormComponent } from '../franchises-update-form/franchises-update-form.component';

@Component({
  selector: 'app-franchises-table',
  templateUrl: './franchises-table.component.html',
  styleUrl: './franchises-table.component.scss',
  providers: [DialogService, ConfirmationService, MessageService]
})
export class FranchisesTableComponent implements OnInit, OnDestroy{
  constructor(
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private franchise: FranchiseService
  ) { }

  private unsubscribe$ = new Subject<void>();
  @ViewChild('dt2') dt2!: Table;
  ref: DynamicDialogRef | undefined;

  franchises: any[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.getFranchisesData()
  }

  getFranchisesData(){
    this.loading = true;

    this.franchise.getAllFranchises().pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        console.log(response);
        let parsedResponse = JSON.parse(response.body);
        this.franchises = parsedResponse;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.loading = false;
      }
    })
  }

  openNewFranchiseForm(){
    this.ref = this.dialogService.open(FranchisesInsertFormComponent, 
      { 
        header: 'Nueva Franquicia',
        width: '30%'
      }
    );

    this.ref.onClose.subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Registro insertado' });
      this.getFranchisesData();
    });
  }

  openFranchiseDeleteDialog(event: Event, id: any){
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
        this.franchise.deleteFranchise(id).pipe(takeUntil(this.unsubscribe$)).subscribe({
          next: (response) => {
            console.log(response);
            this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Registro eliminado' });
          },
          error: (error) => {
            console.error(error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el registro' });
          },
          complete: () => {
            this.getFranchisesData();
          }
        })
      },
      reject: () => {}
  });
  }

  openUpdateFranchiseForm(id: any){
    this.ref = this.dialogService.open(FranchisesUpdateFormComponent, 
      { 
        header: 'Actualizar Franquicia',
        width: '30%',
        data: {
          id: id
        }
      }
    );

    this.ref.onClose.subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: 'Registro actualizado' });
      this.getFranchisesData();
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
