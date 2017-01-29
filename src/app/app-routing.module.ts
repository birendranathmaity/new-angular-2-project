import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }            from './home/home.component';
import { FavoriteMovieComponent }       from './favorite-movie/favorite-movie.component';
import { CardGameComponent }       from './card-game/card-game.component';
import { MovieCastDetailsComponent }       from './movie-cast-details/movie-cast-details.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
    
  },
   {
    path: 'favoriteMovie',
    component: FavoriteMovieComponent
    
  }, {
    path: 'cast/:id',
    component: MovieCastDetailsComponent
    
  },
   {
    path: 'cardGame',
    component: CardGameComponent
    
  },
  
   { path: '',   redirectTo: '/home',pathMatch: 'full'}
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
