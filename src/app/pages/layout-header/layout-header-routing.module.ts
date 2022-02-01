import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutHeaderPage } from './layout-header.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutHeaderPageRoutingModule {}
