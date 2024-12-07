import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.scss'
})
export class MoviesPageComponent {
  constructor(
    private location: Location
  ){}

  goBack(){
    this.location.back()
  }
}
