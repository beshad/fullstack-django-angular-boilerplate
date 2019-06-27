import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:9000'
  httpsHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllThings(): Observable <any> {
    return this.http.get(`${this.baseUrl}/things/`, {
      headers: this.httpsHeaders
    })
  }
}
