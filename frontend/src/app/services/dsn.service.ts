import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dsn } from '../models/dsn.model';

const baseUrl = 'http://localhost:8080/api/dsn';

@Injectable({
  providedIn: 'root'
})
export class DsnService {

  constructor(private http: HttpClient) { }

  ambilSemuaDsn(): Observable<Dsn[]> {
    return this.http.get<Dsn[]>(baseUrl);
  }

  get(id: any): Observable<Dsn> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  tambahDsn(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  hapus(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
