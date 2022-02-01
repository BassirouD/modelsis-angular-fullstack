import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutHeaderPageRoutingModule } from './layout-header-routing.module';

import { LayoutHeaderPage } from './layout-header.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LayoutHeaderPageRoutingModule
    ],
    exports: [
        LayoutHeaderPage
    ],
    declarations: [LayoutHeaderPage]
})
export class LayoutHeaderPageModule {}
