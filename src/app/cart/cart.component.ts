import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../cards/Card';
import { MovieCartService } from '../movie-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  likedList$ !: Observable<Card[]>;
  constructor(private cart : MovieCartService) {
    this.likedList$ = cart.likedList.asObservable();
   }

  ngOnInit(): void {
  }

  removeFromLiked(card : Card){
    card.liked= false
    this.cart.removeFromLiked(card);
    console.log(card.liked);
    
  }

}
