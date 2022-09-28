import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  total:number =   this.getTotal(this.items)
  @Input() item: Product;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.item = {
      name: '',
      price: 1,
      quantity: 1,
      id: 0,
      description: '',
      url: '',
    };
    
  }
  getTotal(items: Product[]): number {
    let total: number = 0;
    for (let index = 0; index < items.length; index++) {
      total = total + items[index]['price'] * items[index]['quantity'];
    }
    return total;
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {}

  plusOne(item: Product): void {
    item.quantity <= 9 ? (item.quantity += 1) : item.quantity;
    this.total = this.getTotal(this.items)
    
  }
  minusOne(item: Product): void {
    item.quantity >= 1 ? (item.quantity -= 1) : item.quantity;
    this.total = this.getTotal(this.items)
  }

remove(item: Product): void {
    this.items = this.items.filter((p) => p.id !== item.id);
    this.total = this.getTotal(this.items)
  }

}
