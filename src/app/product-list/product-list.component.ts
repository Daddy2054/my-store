import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  addToCart(product: Product) {
    product.quantity = 1;
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }
}
