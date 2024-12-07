import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-franchises-page',
  templateUrl: './franchises-page.component.html',
  styleUrl: './franchises-page.component.scss'
})
export class FranchisesPageComponent {
  constructor(
    private location: Location
  ){}

  goBack(){
    this.location.back()
  }
}
