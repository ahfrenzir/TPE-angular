import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../cards/Card';
import { MovieCartService } from '../movie-cart.service';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private cart : MovieCartService,
    private movies : MoviesService ) { 

   }

  @Input()
  card !: Card;

  @Output()
  likeChange : EventEmitter<Card> = new EventEmitter<Card>();

  ngOnInit(): void {
  }

  addToLike(card : Card){
    this.cart.addToLike(card);
    card.liked = true;
    card.disliked = false;
  }

  dislike(card : Card){
    if(card.liked){
      this.cart.removeFromLiked(card)
      card.disliked= true;
      card.liked = false
    }else{
      card.disliked=true;
      card.liked = false;
    }
    
  }

}
