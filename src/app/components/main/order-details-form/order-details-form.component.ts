import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-details-form',
  templateUrl: './order-details-form.component.html',
  styleUrls: ['./order-details-form.component.scss'],
})
export class OrderDetailsFormComponent implements OnInit {
  orderDetailsForm!: FormGroup;

  constructor(private form: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.orderDetailsForm = new FormGroup({
      userName: new FormControl(null),
      email: new FormControl(null),
      address: new FormGroup({
        locality: new FormControl(null),
        city: new FormControl(null),
        state: new FormControl(null),
        zip: new FormControl(null),
      }),
    });
  }

  onSubmit() {}
}
