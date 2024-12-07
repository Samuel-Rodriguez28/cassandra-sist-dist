import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {
  constructor(
    private api: HttpClient
  ) { }

  private apiUrl = "https://tkzuxm6666.execute-api.us-east-1.amazonaws.com/v1/franchises";

  getAllFranchises(): Observable<any>{
    return this.api.get(this.apiUrl);
  }

  getSpecificFranchise(id: any): Observable<any>{
    return this.api.get(`${this.apiUrl}/${id}`);
  }

  insertFranchise(data: any): Observable<any>{
    return this.api.post(this.apiUrl, data);
  }

  deleteFranchise(id: any): Observable<any>{
    return this.api.delete(`${this.apiUrl}/${id}`);
  }

  updateFranchise(id: any, data: any): Observable<any>{
    return this.api.put(`${this.apiUrl}/${id}`, data);
  }
}
