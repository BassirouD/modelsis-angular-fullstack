import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./pages/modals/add-product/add-product.module').then(m => m.AddProductPageModule)
  },
  {
    path: 'add-type',
    loadChildren: () => import('./pages/modals/add-type/add-type.module').then(m => m.AddTypePageModule)
  },
  {
    path: 'layout-header',
    loadChildren: () => import('./pages/layout-header/layout-header.module').then(m => m.LayoutHeaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
