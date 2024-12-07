import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DirectorService } from '../../services/director-service/director.service';

@Component({
  selector: 'app-directors-insert-form',
  templateUrl: './directors-insert-form.component.html',
  styleUrl: './directors-insert-form.component.scss'
})
export class DirectorsInsertFormComponent implements OnDestroy {
  constructor(
    private director: DirectorService,
    private ref: DynamicDialogRef
  ){}

  private unsubscribe$ = new Subject<void>();
  name: string = "";
  last_name: string = "";
  loading: boolean = false;

  checkDisabled(){
    if(this.name.length === 0 || this.last_name.length === 0){
      return true;
    }

    return false;
  }

  insertDirector(){
    this.loading = true;

    let data = {
      id: uuid(),
      name: this.name,
      last_name: this.last_name
    }

    this.director.insertDirector(data).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        console.log(response);
        this.ref.close();
      },
      error: (error) => {
        console.error(error)
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
