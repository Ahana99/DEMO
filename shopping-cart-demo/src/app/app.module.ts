import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
    CartComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
