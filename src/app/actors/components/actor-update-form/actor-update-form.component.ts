import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActorService } from '../../services/actor-sservice/actor.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-actor-update-form',
  templateUrl: './actor-update-form.component.html',
  styleUrl: './actor-update-form.component.scss'
})
export class ActorUpdateFormComponent implements OnDestroy, OnInit {
  constructor(
    private config: DynamicDialogConfig,
    private actors: ActorService,
    private ref: DynamicDialogRef
  ){}
  
  private unsubscribe$ = new Subject<void>();

  id: string = "";
  name: string = "";
  last_name: string = "";
  loading: boolean = false;
  fieldsUnclear: boolean = false;
  editingName: boolean = false;
  editingLastName: boolean = false;

  ngOnInit(): void {
    this.id = this.config.data.id;
    this.getActorData();
  }

  getActorData(){
    this.loading = true;

    this.actors.getSpecificActor(this.id).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        console.log(response);
        let data_response: any = JSON.parse(response.body);
        this.name = data_response.name;
        this.last_name = data_response.last_name;
      },
      error: (error) => {
        console.error(error)
      },
      complete: () => {
        this.loading = false;
      }
    })
  }

  updateActor(){
    this.loading = true;

    let data = {
      name: this.name,
      last_name: this.last_name
    }

    this.actors.updateActor(this.id, data).pipe(takeUntil(this.unsubscribe$)).subscribe({
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

  editLastName(){
    this.editingLastName = true;
    this.fieldsUnclear = !this.fieldsUnclear;
  }

  confirmNameChange(){
    this.editingName = false;
    this.fieldsUnclear = !this.fieldsUnclear;
  }

  confirmLastNameChange(){
    this.editingLastName = false;
    this.fieldsUnclear = !this.fieldsUnclear;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
