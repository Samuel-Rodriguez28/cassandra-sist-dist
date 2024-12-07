import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  constructor(
    private api: HttpClient
  ) { }

  private apiUrl = "https://tkzuxm6666.execute-api.us-east-1.amazonaws.com/v1/directors";

  getAllDirectors(): Observable<any>{
    return this.api.get(this.apiUrl);
  }

  getSpecificDirector(id: any): Observable<any>{
    return this.api.get(`${this.apiUrl}/${id}`);
  }

  insertDirector(data: any): Observable<any>{
    return this.api.post(this.apiUrl, data);
  }

  deleteDirector(id: any): Observable<any>{
    return this.api.delete(`${this.apiUrl}/${id}`);
  }

  updateDirector(id: any, data: any): Observable<any>{
    return this.api.put(`${this.apiUrl}/${id}`, data);
  }
}

