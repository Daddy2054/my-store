import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  items = this.cartService.getItems();
  total: number = 0;
 


  constructor(    public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.currentCartTotal.subscribe((msg) => (this.total = msg));

  }

}
