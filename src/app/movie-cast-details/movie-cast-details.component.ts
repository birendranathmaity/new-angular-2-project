import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import {FavmovieService} from '../favorite-movie/favmovie.service';
@Component({
  selector: 'my-app',
  templateUrl: './movie-cast-details.component.html',
  styleUrls: ['./movie-cast-details.component.css'],
  providers:[FavmovieService]
})
export class MovieCastDetailsComponent implements OnInit {
casts={};
  constructor( private route: ActivatedRoute,
    private router: Router,private favmovieService:FavmovieService) { }

  ngOnInit() {

  	this.favmovieService.callMovieServerForCDT(this.route.snapshot.params['id']).then((credits:Comment) => {
         this.casts=credits;
         
            
        });
  	
  }
  gotoThemoviedbProfile(cid){
    window.open("https://www.themoviedb.org/person/"+cid,"_blank");

  }
changePro(url){
  var tmurl="";
if(url){
  tmurl="url(http://image.tmdb.org/t/p/w185" + url + ")";

  
}
else{
tmurl="url(/assets/icons/man.png)";
}
return tmurl;
}
}
