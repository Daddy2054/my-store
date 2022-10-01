import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
//import { ShippingComponent } from './shipping/shipping.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { CustomerFormReactiveComponent } from './customer-form-reactive/customer-form-reactive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,

    ProductDetailsComponent,
    CartComponent,
//    ShippingComponent,
    ProductSearchComponent,
    CustomerFormReactiveComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
),
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      //{ path: 'shipping', component: ShippingComponent },
    ]),
    MatIconModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    
    AuthModule.forRoot({
      domain: 'dev-pdupjdfs.us.auth0.com',
      clientId: 'euG9YyJW450yXZ2m5kdGQ0WfYZJdISAy'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
