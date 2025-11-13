import { Component, Input } from '@angular/core';
import { Product } from '../app.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() products: Product[] = [];
  @Input() selectedGender: string = 'all';
  @Input() selectedCategory: string = 'all';

  get filteredProducts(): Product[] {
    return this.products.filter(p => {
      const genderMatch = this.selectedGender === 'all' || p.gender === this.selectedGender;
      const categoryMatch = this.selectedCategory === 'all' || p.category === this.selectedCategory;
      return genderMatch && categoryMatch;
    });
  }
}
