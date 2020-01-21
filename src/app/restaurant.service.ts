import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  readonly url = 'http://localhost:3000/restaurants/';

  get(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.url);
  }

  create(restaurant: Restaurant): Observable<Restaurant> {
    // const headers = new HttpHeaders({
    //   'Content-Type':  'application/json',
    // });
    return this.http.post<Restaurant>(this.url, restaurant);
  }
}
