import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs';
import * as conf from 'config';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private types;
  readonly url = `${conf.restAppUrl}/restaurants/`;
  readonly urlTypes = `${conf.restAppUrl}/restaurant_types/`;

  constructor(private http: HttpClient) {
    this.getTypesFromServer().subscribe(types => {this.types = types; });
  }

  private getTypesFromServer(): Observable<any> {
    return this.http.get(this.urlTypes);
  }

  public getTypes() {
    return this.types;
  }

  public getType(type: number): string {
    const typesFound = this.types.filter(x => Number(x.id) === Number(type));

    if ( typesFound.length ) {
      return typesFound[0].name;
    } else {
      return '';
    }
  }

  get(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.url);
  }

  create(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(this.url, restaurant);
  }
}
