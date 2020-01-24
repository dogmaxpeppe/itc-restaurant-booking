import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.scss']
})
export class RestaurantCreateComponent implements OnInit {
  @Output() refreshList = new EventEmitter();
  private form;
  constructor(
    private fb: FormBuilder,
    private restaurant$: RestaurantService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      address: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      type: ['1', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // Evidenzia gli errori
    if ( this.form.valid ) {
      const restaurant: Restaurant = {
        name: this.form.controls.name.value,
        address: this.form.controls.address.value,
        email: this.form.controls.email.value,
        type: Number(this.form.controls.type.value),
      };

      this.restaurant$.create(restaurant).subscribe(data => {
        this.router.navigateByUrl('/restaurants').then(() => {
          alert(`The restaurant ${data.name} with ID: ${data.id} has been created correctly`);
        });
      }, error => {
        alert(error);
      });
    } else {
      Object.keys(this.form.controls).forEach(key => {
        const control: FormControl = this.form.controls[key];
        if ( !control.valid ) {
          control.markAsDirty();
        }
      });
      alert('Fill all required fields');
    }
  }
}
