import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  private restaurant: Restaurant;

  constructor(
    private restaurant$: RestaurantService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    /**
     * VERSIONE OBSERVABLE
     *
     * Si utilizza un Observable con cui osservare il cambiamento di parametri della route e chiamare
     * quindi il servizio per ottenere il ristorante
     */
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.restaurant$.get(params.get('id')))
    )
      .subscribe(restaurant => {this.restaurant = restaurant; } );

    /**
     * VERSIONE NON-OBSERVABLE
     *
     * La versione senza Observable va utilizzata SOLO se siamo sicuro che l'accesso al componente corrente
     * avverrà sempre da zero, con una ricreazione dello stesso. Se invece si accede ad una route che utilizza lo stesso
     * componente di quello chiamante, bisogna usare la versione precedente
     */
    // this.restaurant$.get(this.route.snapshot.paramMap.get('id')).subscribe(restaurant => {
    //   this.restaurant = restaurant;
    // });
  }


}
