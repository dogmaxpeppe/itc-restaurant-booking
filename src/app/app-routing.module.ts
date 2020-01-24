import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';


const routes: Routes = [
  {path: 'restaurants', component: RestaurantListComponent},
  {path: 'restaurants/create', component: RestaurantCreateComponent},
  {path: 'restaurants/:id', component: RestaurantDetailsComponent},
  {
    path: '',
    redirectTo: '/restaurants',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
