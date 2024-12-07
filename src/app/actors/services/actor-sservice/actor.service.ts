import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  constructor(
    private api: HttpClient
  ) { }

  private apiUrl = "https://tkzuxm6666.execute-api.us-east-1.amazonaws.com/v1/actors";

  getAllActors(): Observable<any>{
    return this.api.get(this.apiUrl);
  }

  getSpecificActor(id: any): Observable<any>{
    return this.api.get(`${this.apiUrl}/${id}`);
  }

  insertActor(data: any): Observable<any>{
    return this.api.post(this.apiUrl, data);
  }

  deleteActor(id: any): Observable<any>{
    return this.api.delete(`${this.apiUrl}/${id}`);
  }

  updateActor(id: any, data: any): Observable<any>{
    return this.api.put(`${this.apiUrl}/${id}`, data);
  }
}
