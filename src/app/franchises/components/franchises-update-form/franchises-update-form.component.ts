import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FranchiseService } from '../../services/franchise-service/franchise.service';

@Component({
  selector: 'app-franchises-update-form',
  templateUrl: './franchises-update-form.component.html',
  styleUrl: './franchises-update-form.component.scss'
})
export class FranchisesUpdateFormComponent implements OnDestroy, OnInit {
  constructor(
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private franchise: FranchiseService
  ){}

  private unsubscribe$ = new Subject<void>();

  id: string = "";
  name: string = "";
  loading: boolean = false;
  fieldsUnclear: boolean = false;
  editingName: boolean = false;
  
  ngOnInit(): void {
    this.id = this.config.data.id;
    this.getFranchiseData();
  }

  getFranchiseData(){
    this.loading = true;

    this.franchise.getSpecificFranchise(this.id).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        console.log(response);
        let data_response: any = JSON.parse(response.body);
        this.name = data_response.name;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.loading = false;
      }
    })
  }

  updateFranchise(){
    this.loading = true;

    let data = {
      name: this.name
    }

    this.franchise.updateFranchise(this.id, data).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        console.log(response);
        this.ref.close();
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.loading = false;
      }
    })
  }

  editName(){
    this.editingName = true;
    this.fieldsUnclear = !this.fieldsUnclear;
  }

  confirmNameChange(){
    this.editingName = false;
    this.fieldsUnclear = !this.fieldsUnclear;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
