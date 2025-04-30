import { Component } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  standalone: false,
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {
  cervezas = [
    {
      nombre: 'Cerveza Rubia',
      descripcion: 'Refrescante, suave y con notas cítricas. Ideal para el verano.',
      abv: 4.5,
      imagen: 'https://plus.unsplash.com/premium_photo-1723532438811-21ae2f31fca2?q=80&w=1394&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nombre: 'IPA',
      descripcion: 'Intensa y amarga, con fuerte presencia de lúpulo y aroma floral.',
      abv: 6.2,
      imagen: 'https://plus.unsplash.com/premium_photo-1695285406175-c3b866e96091?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nombre: 'Porter',
      descripcion: 'Oscura, con sabores tostados a café y chocolate.',
      abv: 5.8,
      imagen: 'https://images.unsplash.com/photo-1652689097457-45a35c6dd88d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nombre: 'Amber Ale',
      descripcion: 'Color rojizo, cuerpo medio y equilibrio entre malta y lúpulo.',
      abv: 5.0,
      imagen: 'https://plus.unsplash.com/premium_photo-1695658864441-ad11e5afad29?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nombre: 'Weissbier',
      descripcion: 'Cerveza de trigo, turbia y con notas de banana y clavo.',
      abv: 5.2,
      imagen: 'https://images.unsplash.com/photo-1647185072241-a1cc40d82a82?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
  
  

}
