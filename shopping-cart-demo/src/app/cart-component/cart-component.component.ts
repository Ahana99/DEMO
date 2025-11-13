import { Component, EventEmitter, Input , OnInit, Output } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit{
  @Input() cart: Product[] = [];
  @Output() cartChange = new EventEmitter<Product[]>();
  totalPrice: number = 0;

  removeFromCart(product: Product) {
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.cartChange.emit(this.cart);
    }
    }

  totalCartPrice(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }
  ngOnInit(): void {

  }

}
