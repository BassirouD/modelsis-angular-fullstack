import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTypePageRoutingModule } from './add-type-routing.module';

import { AddTypePage } from './add-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTypePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddTypePage]
})
export class AddTypePageModule {}
