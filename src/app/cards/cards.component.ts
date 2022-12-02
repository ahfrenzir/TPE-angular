import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieCartService } from '../movie-cart.service';
import { Card } from './Card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  likedList$ !: Observable<Card[]>;
  constructor(
    private cart : MovieCartService
  ) { 
    this.likedList$ = cart.likedList.asObservable();
  }

  cards : Card[] = [{
    name: 'One punch man',
    img : '/assets/img/One-punch.jpg',
    desc: 'El superhéroe más poderoso del mundo puede matar a cualquiera de un solo golpe, pero al no tener retos, lucha contra la depresión y el hastío.',
    liked: false,
    disliked: false
  },
  {
    name: 'Berserk',
    img : '/assets/img/berserk.jpg',
    desc: 'Guts es un misterioso, cruel y talentoso mercenario cazador de demonios, con un extraño brazo artificial y una descomunal espada más grande que él mismo con la que es capaz de causar estragos entre sus enemigos, un solitario guerrero vagabundo con una cruzada personal marcada por su venganza contra las fuerzas de la oscuridad.',
    liked: false,
    disliked: false
  },
  {
    name: 'Vinland Saga',
    img : '/assets/img/vinland-saga.webp',
    desc: 'Ambientada a inicios del siglo XI, nuestra historia sigue la vida de Thorfinn, hijo del más grandioso guerrero vikingo que haya existido: Thors, quien decidió abandonar ese sendero plagado de guerra, masacres y destrucción, con la esperanza de vivir una vida tranquila como hombre de familia y brindarle a su hijo la paz que él nunca conoció mientras crecía.',
    liked: false,
    disliked: false
  },
  {
    name: 'Hunter X Hunter',
    img : '/assets/img/hunterxhunter.webp',
    desc: 'Gon Freecs trabaja duro para convertirse en un cazador y buscar al padre que nunca conoció.',
    liked: false,
    disliked: false
  },
  {
    name: 'Vagabond',
    img : '/assets/img/vagabond.jpg',
    desc: 'Vagabond nos relata la historia de Shinme Takezo, un joven salvaje que no duda en involucrarse en combates a muerte para forjarse una reputación y que está destinado a convertirse en el legendario Santo de la Espada Miyamoto Musashi.',
    liked: false,
    disliked: false
  },
  {
    name: 'One piece',
    img : '/assets/img/one-piece.jpg',
    desc: 'Esta historia se sitúa en el momento más álgido de la Gran Era de los Piratas, cuando el joven Monkey D. Luffy quiere llegar a ser el Rey de los Piratas y hacerse al fin con un legendario tesoro, el One Piece.',
    liked: false,
    disliked: false
  },]

  ngOnInit(): void {
  }

  

}
