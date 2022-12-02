import { Component, OnInit } from '@angular/core';
import { Categoria } from './Categoria';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categorias : Categoria[] = [{
    name: 'Accion',
    img: '/assets/img/accio.jpg',
  },{
    name: 'Deportes',
    img: '/assets/img/deportes.jpg',
  },{
    name: 'Documentales',
    img: '/assets/img/documentales.jpg',
  },{
    name: 'Policiales',
    img: '/assets/img/policiales.jpeg',
  },{
    name: 'Drama',
    img: '/assets/img/drama.jpg',
  },{
    name: 'Animacion',
    img: '/assets/img/animacion.jpg',
  },{
    name: 'Suspenso',
    img: '/assets/img/suspenso.jpg',
  },
]

}
