import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProductPageRoutingModule } from './add-product-routing.module';

import { AddProductPage } from './add-product.page';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProductPageRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
  declarations: [AddProductPage]
})
export class AddProductPageModule {}
