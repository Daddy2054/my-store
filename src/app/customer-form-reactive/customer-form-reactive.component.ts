import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-customer-form-reactive',
  templateUrl: './customer-form-reactive.component.html',
  styleUrls: ['./customer-form-reactive.component.css'],
})
export class CustomerFormReactiveComponent implements OnInit {
  customer = { name: '', address: '' };
  customerForm!: FormGroup;
  items = this.cartService.getItems();
  total: number = 0;
  @Input() item: Product;
  orderDate = new Date();
  
  
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
  submitForm(): void {
    //    console.log(this.customer.name);
    //  console.log(this.customer.address);
    //   console.log(this.items);
    this.cartService.currentCartTotal.subscribe((msg) => (this.total = msg));
    //   console.log(this.total);
    // this.cartService.updateCartTotal(this.cartService.countTotal(this.items));
  }

  constructor(private cartService: CartService) {
    this.item = {
      name: '',
      price: 1,
      quantity: 1,
      id: 0,
      description: '',
      url: '',
    };
  }
}
