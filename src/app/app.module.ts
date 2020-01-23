import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantCreateComponent,
    RestaurantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
