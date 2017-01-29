import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { CardGameComponent } from './card-game/card-game.component';
import { FavoriteMovieComponent } from './favorite-movie/favorite-movie.component';
import { MovieCastDetailsComponent } from './movie-cast-details/movie-cast-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
   
    
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [AppComponent,CardGameComponent,FavoriteMovieComponent,MovieCastDetailsComponent, HomeComponent],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  
  constructor(router: Router) {
   
  }
}

