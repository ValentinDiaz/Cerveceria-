import { Injectable } from '@angular/core';
import { Cerveza } from './beer-list/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerCartService {

  constructor() { }

  listaCompras: Cerveza[] = [];


  agregarAlCrrito( cerveza: Cerveza){
    this.listaCompras.push(cerveza)
  }




}
