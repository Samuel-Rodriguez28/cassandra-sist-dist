import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DirectorService } from '../../services/director-service/director.service';

@Component({
  selector: 'app-directors-update-form',
  templateUrl: './directors-update-form.component.html',
  styleUrl: './directors-update-form.component.scss'
})
export class DirectorsUpdateFormComponent implements OnDestroy, OnInit {
  constructor(
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private director: DirectorService
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
    this.getDirectorData()
  }

  getDirectorData(){
    this.loading = true;

    this.director.getSpecificDirector(this.id).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (response) => {
        console.log(response);
        let data_response: any = JSON.parse(response.body);
        this.name = data_response.name;
        this.last_name = data_response.last_name;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.loading = false;
      }
    })
  }

  updateDirector(){
    this.loading = true;

    let data = {
      name: this.name,
      last_name: this.last_name
    }

    this.director.updateDirector(this.id, data).pipe(takeUntil(this.unsubscribe$)).subscribe({
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
