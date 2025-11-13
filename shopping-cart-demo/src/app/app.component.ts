import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[] = [
    { id: 1, name: 'T-Shirt', price: 499 },
    { id: 2, name: 'Running Shoes', price: 1899 },
    { id: 3, name: 'Smart Watch', price: 3499 },
    { id: 4, name: 'Wireless Earbuds', price: 2199 },
    { id: 5, name: 'Backpack', price: 1299 },
    { id: 6, name: 'Sunglasses', price: 799 },
    { id: 7, name: 'Jeans', price: 1499 },
    { id: 8, name: 'Formal Shirt', price: 999 },
    { id: 9, name: 'Leather Wallet', price: 699 },
    { id: 10, name: 'Sports Cap', price: 399 },
  ];
  cart: Product[] = []
  
}

export interface Product {
  id: number;
  name: string;
  price: number;
}
