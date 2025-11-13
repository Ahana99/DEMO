import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   productList: Product[] = [
    { name: 'Running Shoes', category: 'Shoes', gender: 'Male', price: 1200 },
    { name: 'High Heels', category: 'Shoes', gender: 'Female', price: 2000 },
    { name: 'T-Shirt', category: 'Shirts', gender: 'Male', price: 500 },
    { name: 'Dress', category: 'Shirts', gender: 'Female', price: 1500 },
    { name: 'Unisex Cap', category: 'Accessories', gender: 'Unisex', price: 300 }
  ];

  genders: string[] = ['All', 'Male', 'Female'];
  categories: string[] = ['All', 'Shoes', 'Shirts', 'Accessories'];

  gender = 'gender';
  category = 'category';
  
  selectedGender: string = 'all';
  selectedCategory: string = 'all';
}

export interface Product {
  name: string;
  category: string;
  gender: string;
  price: number;
}