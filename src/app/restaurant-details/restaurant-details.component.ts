import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor(private restaurant$: RestaurantService) {
  }

  ngOnInit() {
  }


}
