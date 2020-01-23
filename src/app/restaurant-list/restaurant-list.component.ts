import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit, OnChanges {

  restaurants: Array<Restaurant> = [];
  selectedRestaurant: Restaurant;
  @Input() refreshList = false;

  constructor(private restaurant$: RestaurantService) {
    this.getRestaurants();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ( changes.refreshList.currentValue ) {
      this.getRestaurants();
    }
    this.refreshList = false;
  }

  getRestaurants() {
    this.restaurant$.get().subscribe(data => {
      this.restaurants = data;
    });
  }

  setRestaurant(restaurant: Restaurant) {
    this.selectedRestaurant = restaurant;
  }
}
