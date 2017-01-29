import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class FavmovieService {
themoviedb={
	API_KEY:"3c89f4a6d459bcd6d792636ef4e5f19c",
	TOKEN:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzg5ZjRhNmQ0NTliY2Q2ZDc5MjYzNmVmNGU1ZjE5YyIsInN1YiI6IjU4ODllMzBhYzNhMzY4MTljZTAwNGMxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y9Xh3ZObz5pvqW6X4AHDJIo7Ri4UC5ubrNgcPo8SYQA"
};
constructor(private http:Http) {}

callMovieServerForDTLS(mid){

return this.http.get("https://api.themoviedb.org/3/movie/"+mid+"?api_key="+this.themoviedb.API_KEY+"&language=en-US").map(res => res.json())
  .toPromise();
	
}
callMovieServerForCDT(mid){

return this.http.get("https://api.themoviedb.org/3/movie/"+mid+"/credits?api_key="+this.themoviedb.API_KEY).map(res => res.json())
  .toPromise();
	
}

}
