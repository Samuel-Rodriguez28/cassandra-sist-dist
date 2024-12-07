import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-directors-page',
  templateUrl: './directors-page.component.html',
  styleUrl: './directors-page.component.scss'
})
export class DirectorsPageComponent {
  constructor(
    private location: Location
  ){}

  goBack(){
    this.location.back()
  }
}
