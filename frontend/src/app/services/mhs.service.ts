import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mhs } from '../models/mhs.model';

const baseUrl = 'http://localhost:8080/api/mhs';

@Injectable({
  providedIn: 'root'
})
export class MhsService {

  constructor(private http: HttpClient) { }

  ambilSemuaMhs(): Observable<Mhs[]> {
    return this.http.get<Mhs[]>(baseUrl);
  }

  get(id: any): Observable<Mhs> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  tambahMhs(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  hapus(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
