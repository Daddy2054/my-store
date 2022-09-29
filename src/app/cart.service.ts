import { Injectable } from '@angular/core';
import { Product } from './models/Product';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
total:number =this.countTotal(this.items)
  addToCart(product: Product) {
   
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  
  countTotal(items: Product[]): number {
    let total: number = 0;
    for (let index = 0; index < items.length; index++) {
      total = total + items[index]['price'] * items[index]['quantity'];
    }

    return total;
  }
 

  
  constructor(  
//      private http: HttpClient
      ) { }
}
