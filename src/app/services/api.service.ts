import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = 'https://minicore-ingenieria-web-backend.onrender.com';

  constructor(private http: HttpClient) { }

  getComisiones(inicio: string, fin: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.api}/comisiones?inicio=${inicio}&fin=${fin}`
    );
  }
}