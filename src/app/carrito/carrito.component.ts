import { Component } from '@angular/core';
import { Cerveza } from '../beer-list/beer';
import { BeerCartService } from '../beer-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss',
})
export class CarritoComponent {
  listaCompras$: Observable<Cerveza[]>;
  constructor(private carrito: BeerCartService) {

    this.listaCompras$ = carrito.listaCompras.asObservable()
   
  }

  eliminarDelCarrito(_t6: Cerveza) {
    throw new Error('Method not implemented.');
  }
  finalizarCompra() {
    throw new Error('Method not implemented.');
  }
}
