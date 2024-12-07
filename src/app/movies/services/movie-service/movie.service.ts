import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(
    private api: HttpClient
  ) { }

  private apiUrl = "https://tkzuxm6666.execute-api.us-east-1.amazonaws.com/v1/movies";

  getAllMovies(): Observable<any>{
    return this.api.get(this.apiUrl);
  }

  getSpecificMovie(id: any): Observable<any>{
    return this.api.get(`${this.apiUrl}/${id}`);
  }

  insertMovie(data: any): Observable<any>{
    return this.api.post(this.apiUrl, data);
  }

  deleteMovie(id: any): Observable<any>{
    return this.api.delete(`${this.apiUrl}/${id}`);
  }

  updateMovie(id: any, data: any): Observable<any>{
    return this.api.put(`${this.apiUrl}/${id}`, data);
  }

  private apiUrlActors = "https://tkzuxm6666.execute-api.us-east-1.amazonaws.com/v1/actors";

  getAllActors(): Observable<any>{
    return this.api.get(this.apiUrlActors);
  }

  private apiUrlFranch = "https://tkzuxm6666.execute-api.us-east-1.amazonaws.com/v1/franchises";

  getAllFranchises(): Observable<any>{
    return this.api.get(this.apiUrlFranch);
  }

  private apiUrlDir = "https://tkzuxm6666.execute-api.us-east-1.amazonaws.com/v1/directors";

  getAllDirectors(): Observable<any>{
    return this.api.get(this.apiUrlDir);
  }
}
