import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import {LayoutHeaderPageModule} from "../layout-header/layout-header.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductsPageRoutingModule,
        ReactiveFormsModule,
        LayoutHeaderPageModule,
    ],
  declarations: [ProductsPage]
})
export class ProductsPageModule {}
