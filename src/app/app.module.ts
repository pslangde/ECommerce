import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { ShopuingCartComponent } from './component/shared/shopuing-cart/shopuing-cart.component';
import { FilterComponent } from './component/shared/shopuing-cart/filter/filter.component';
import { ProductListComponent } from './component/shared/shopuing-cart/product-list/product-list.component';
import { CartComponent } from './component/shared/shopuing-cart/cart/cart.component';
import { CartItemComponent } from './component/shared/shopuing-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './component/shared/shopuing-cart/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShopuingCartComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
