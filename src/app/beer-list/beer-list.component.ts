import { Component, OnInit } from '@angular/core';
import { Cerveza } from './beer';
import { BeerCartService } from '../beer-cart.service';
import { BeerServiceService } from '../beer-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-beer-list',
  standalone: false,
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
})
export class BeerListComponent implements OnInit {
  constructor(
    private carrito: BeerCartService,
    private cervezaSevice: BeerServiceService
  ) {}

  cervezas: Cerveza[] = [];

  ngOnInit(): void {
    this.cervezaSevice
      .getAll()
      .subscribe((cervezas) => (this.cervezas = cervezas));
  }
  // cervezas: Cerveza[] = [
  //   {
  //     nombre: 'Cerveza Rubia',
  //     tipo: 'Rubia',
  //     descripcion:
  //       'Refrescante, suave y con notas cítricas. Ideal para el verano.',
  //     abv: 4.5,
  //     stock: 0,
  //     precio: 25,
  //     clearance: false,
  //     cantidad: 0,
  //     imagen:
  //       'https://plus.unsplash.com/premium_photo-1723532438811-21ae2f31fca2?q=80&w=1394&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     nombre: 'IPA',
  //     tipo: 'Ipa',
  //     descripcion:
  //       'Intensa y amarga, con fuerte presencia de lúpulo y aroma floral.',
  //     abv: 6.2,
  //     stock: 4,
  //     precio: 25,
  //     clearance: true,
  //     cantidad: 0,
  //     imagen:
  //       'https://plus.unsplash.com/premium_photo-1695285406175-c3b866e96091?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     nombre: 'Porter',
  //     tipo: 'Negra',
  //     descripcion: 'Oscura, con sabores tostados a café y chocolate.',
  //     abv: 5.8,
  //     stock: 4,
  //     precio: 25,
  //     clearance: false,
  //     cantidad: 0,
  //     imagen:
  //       'https://images.unsplash.com/photo-1652689097457-45a35c6dd88d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     nombre: 'Amber Ale',
  //     tipo: 'Rubia',
  //     descripcion:
  //       'Color rojizo, cuerpo medio y equilibrio entre malta y lúpulo.',
  //     abv: 5.0,
  //     stock: 4,
  //     precio: 25,
  //     clearance: false,
  //     cantidad: 0,
  //     imagen:
  //       'https://plus.unsplash.com/premium_photo-1695658864441-ad11e5afad29?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  //   {
  //     nombre: 'Weissbier',
  //     tipo: 'Rubia',
  //     descripcion: 'Cerveza de trigo, turbia y con notas de banana y clavo.',
  //     abv: 5.2,
  //     stock: 4,
  //     precio: 25,
  //     clearance: false,
  //     cantidad: 0,
  //     imagen:
  //       'https://images.unsplash.com/photo-1647185072241-a1cc40d82a82?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   },
  // ];

  recibirCerveza(cerveza: Cerveza) {
    this.cervezaSevice.agregarCerveza(cerveza).subscribe({
      next: (res) => {
        this.cervezas.push(res); 
        console.log('Cerveza guardada y lista para mostrar:', res);
      },
      error: (err) => console.error('Error al guardar:', err),
    });
  }

  comprarCerveza(cerveza: Cerveza) {
    if(cerveza.cantidad>0){
      this.carrito.agregarAlCrrito(cerveza);
    cerveza.stock -= cerveza.cantidad;
    cerveza.cantidad = 0;
    }
    
  }
}
