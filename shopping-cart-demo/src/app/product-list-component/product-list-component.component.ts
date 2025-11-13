import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
  @Input() product: Product[] = [];
  @Input() cart: Product[] = [];
  @Output() cartChange = new EventEmitter<Product[]>();

  addToCart(item: Product) {
    this.cart.push(item);
    this.cartChange.emit(this.cart);
  }

  isAdded(item: Product): boolean {
    return this.cart.some(p => p.id === item.id);
  }

  ngOnInit(): void {
    // Initialization logic can go here if needed
  }
}
