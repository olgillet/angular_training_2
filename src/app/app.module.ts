import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainAppComponent } from './main-app/main-app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { MySuperPipePipe } from './my-super-pipe.pipe';
import { ShowPriceDirective } from './show-price.directive';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent,
    MenuComponent,
    ProductListComponent,
    ProductComponent,
    SupplierComponent,
    SupplierListComponent,
    MySuperPipePipe,
    ShowPriceDirective,
    ProductAddComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
