import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Cerveza } from './beer-list/beer';

const URL = 'https://6866966489803950dbb343b1.mockapi.io/api/v1/Cervezas';

@Injectable({
  providedIn: 'root',
})
export class BeerServiceService {
  constructor(private httpCliente: HttpClient) {}

  public getAll(): Observable<Cerveza[]> {
    return this.httpCliente
      .get<Cerveza[]>(URL)
      .pipe(
        tap((cervezas: Cerveza[]) =>
          cervezas.forEach((cerveza) => (cerveza.cantidad = 0))
        )
      );
  }


   agregarCerveza(cerveza: Cerveza): Observable<Cerveza> {
    return this.httpCliente.post<Cerveza>(URL, cerveza);
  }
}
