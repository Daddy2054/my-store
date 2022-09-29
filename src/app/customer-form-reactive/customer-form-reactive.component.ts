import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form-reactive',
  templateUrl: './customer-form-reactive.component.html',
  styleUrls: ['./customer-form-reactive.component.css'],
})
export class CustomerFormReactiveComponent implements OnInit {
  customer = { name: 'Mr.', address: '' };

  customerForm!: FormGroup;

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl(this.customer.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      address: new FormControl(this.customer.address, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  get name() {
    return this.customerForm.get('name')!;
  }

  get address() {
    return this.customerForm.get('address')!;
  }

  constructor() {}
}
