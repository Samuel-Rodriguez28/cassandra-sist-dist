import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActorService } from '../../services/actor-sservice/actor.service';
import { v4 as uuid } from 'uuid';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-actor-insert-form',
  templateUrl: './actor-insert-form.component.html',
  styleUrl: './actor-insert-form.component.scss'
})
export class ActorInsertFormComponent implements OnDestroy {
  constructor(
    private actors: ActorService,
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

  insertActor(){
    this.loading = true;

    let data = {
      id: uuid(),
      name: this.name,
      last_name: this.last_name
    }

    this.actors.insertActor(data).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (result) => {
        console.log(result);
        this.ref.close();
      },
      error: (error) => {
        console.log(error)
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
