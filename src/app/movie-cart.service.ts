import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from './cards/Card';

@Injectable({
  providedIn: 'root'
})
export class MovieCartService {

  constructor() { }

  private _likedList : Card[] = [];
  likedList : BehaviorSubject<Card[]> = new BehaviorSubject(this._likedList);

  addToLike(card : Card){
    let item : Card;
    item = this._likedList.find((v1)=> v1.name == card.name)!
    if(!item){
      this._likedList.push({...card})
    }
    this.likedList.next(this._likedList);
  }

  removeFromLiked(card : Card){
   for (let index = 0; index < this._likedList.length; index++){
    if(this._likedList[index].name == card.name){
      this._likedList.splice(index, 1)
    }
   } 
   this.likedList.next(this._likedList);
  }

}
