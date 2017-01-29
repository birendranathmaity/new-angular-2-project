import { Injectable, Input} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class DeckcardsService {
	
  constructor(private http:Http) { }
newGame(deckId){
return this.http.get("https://deckofcardsapi.com/api/deck/"+ deckId + "/shuffle/").map(res => res.json()).toPromise();
}
drawCard(deckId){
	
	return this.http.get("http://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=2").map(res => res.json())
  .toPromise();
}


startGame(){
return this.http.get("http://deckofcardsapi.com/api/deck/new/shuffle/").map(res => res.json())
  .toPromise();

}

}
