import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurant-booking';
  refreshListActivator = false;

  refreshList($event: any) {
    if ( $event === true ) {
      this.refreshListActivator = true;
    }
  }
}
