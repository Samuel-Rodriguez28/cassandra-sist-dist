import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FranchiseService } from '../../services/franchise-service/franchise.service';

@Component({
  selector: 'app-franchises-insert-form',
  templateUrl: './franchises-insert-form.component.html',
  styleUrl: './franchises-insert-form.component.scss'
})
export class FranchisesInsertFormComponent implements OnDestroy {
  constructor(
    private ref: DynamicDialogRef,
    private franchise: FranchiseService
  ){}

  private unsubscribe$ = new Subject<void>();
  name: string = "";
  loading: boolean = false;

  checkDisabled(){
    if(this.name.length === 0){
      return true;
    }

    return false;
  }

  insertFranchise(){
    this.loading = true;

    let data = {
      id: uuid(),
      name: this.name
    }

    this.franchise.insertFranchise(data).pipe(takeUntil(this.unsubscribe$)).subscribe({
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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
