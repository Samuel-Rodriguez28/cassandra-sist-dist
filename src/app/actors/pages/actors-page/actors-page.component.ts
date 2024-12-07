import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-actors-page',
  templateUrl: './actors-page.component.html',
  styleUrl: './actors-page.component.scss'
})
export class ActorsPageComponent {
  constructor(
    private location: Location
  ){}

  goBack(){
    this.location.back()
  }
}
