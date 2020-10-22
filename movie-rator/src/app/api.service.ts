import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './auth/models/Movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'http://localhost:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token b30425eddd78309fd379d7ad68bc4d42167bb587'
  });

  constructor(private httpClient: HttpClient, ) { }

  getMovies(){
    return  this.httpClient.get<Movie[]>(this.baseUrl, {headers: this.headers});
  }
  getMovie(id:number){
    return  this.httpClient.get<Movie>(`${this.baseUrl}${id}/`, {headers: this.headers});
  }
  rateMovie(rate: number, movieId: number){
    const body = JSON.stringify({stars: rate});
    return  this.httpClient.post(`${this.baseUrl}${movieId}/rate_movie/`, body ,{headers: this.headers});
  }
}
