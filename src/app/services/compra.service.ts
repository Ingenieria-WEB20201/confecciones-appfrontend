import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const COMPRA_API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  create(compra): Observable<any> {
    console.log(compra);
    return this.http.post(COMPRA_API + '/api/compra/', {
      neto: compra.neto,
      fecha: compra.fecha,
      userid: compra.userid,
      almacenid: compra.almacenid,
      itemCompra: compra.itemCompra
    });
  }

  getAll(): Observable<any> {
    return this.http.get(COMPRA_API + '/api/compra/');
  }

  get(id: String): Observable<any> {
    return this.http.get(COMPRA_API + '/api/compra/id/' + id);
  }
}