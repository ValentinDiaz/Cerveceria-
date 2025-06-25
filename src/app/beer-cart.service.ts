import { Injectable } from '@angular/core';
import { Cerveza } from './beer-list/beer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeerCartService {
  constructor() {}
  private _listaCompras : Cerveza[] = [];
  listaCompras: BehaviorSubject<Cerveza[]> = new BehaviorSubject(this._listaCompras);

  agregarAlCrrito(cerveza: Cerveza) {
    let item = this._listaCompras.find((c1) => c1.nombre == cerveza.nombre);

    if (!item) {
      this._listaCompras.push({... cerveza});
    }else{
      item.cantidad += cerveza.cantidad;
    }

    console.log(this._listaCompras);

    this.listaCompras.next(this._listaCompras);
  }
}
