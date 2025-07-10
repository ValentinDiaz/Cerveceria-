import { Component, EventEmitter, Input, input, Output } from '@angular/core';
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

@Input() cantidad!: number;
  @Output() valorChange: EventEmitter<number> = new EventEmitter<number>();

  listaCompras$: Observable<Cerveza[]>;
  constructor(private carrito: BeerCartService) {
    this.listaCompras$ = carrito.listaCompras.asObservable()

  }

   finalizarCompra() {
    alert('¡Gracias por tu compra! 🥳');
    this.carrito.vaciarCarrito();
  }

 

}
