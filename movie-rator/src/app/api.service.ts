import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'http://localhost:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Token 71293719c279f2b44afeef5b999123008e60054d'
  });

  constructor(private httpClient: HttpClient, ) { }

  getMovies(){
    return  this.httpClient.get(this.baseUrl, {headers: this.headers});
  }
}
