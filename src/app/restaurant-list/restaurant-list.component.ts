import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Array<Restaurant> = [];

  constructor(private restaurant$: RestaurantService) {
    restaurant$.get().subscribe(data => {
      this.restaurants = data;
    });
  }

  ngOnInit() {
  }

}
