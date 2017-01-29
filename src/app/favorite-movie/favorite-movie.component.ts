import { Component, OnInit } from '@angular/core';
import {FavmovieService} from './favmovie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.css'],
  providers:[FavmovieService]
})
export class FavoriteMovieComponent implements OnInit {
public loader=true;

  constructor(private favmovieService:FavmovieService,private route: ActivatedRoute,
    private router: Router ) { }

MoviesIds=[177572,228150,205596,157336,210577,118340,24428,127585,19995,550,120,11,49026,424,1891,27205];
//MoviesIds=[100];
FmovieData=[];
createRange(ids){
  
 for(var i=0;i<ids.length;i++){

this.favmovieService.callMovieServerForDTLS(ids[i]).then((movie:Comment) => {
          
             this.FmovieData.push(movie);
            
        });

 }
  
  this.loader=false;
  
  
  
}
  ngOnInit() {
  this.createRange(this.MoviesIds);
 
  }
onSelect(id) {
    this.router.navigate(['/cast', id]);
  }

}
