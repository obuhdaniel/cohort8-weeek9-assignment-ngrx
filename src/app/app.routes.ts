import { Routes } from '@angular/router';
import { Products } from './products/products';
import { Home } from './home/home';
import { Crud } from './crud/crud';
import { Cart } from './cart/cart';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: Home },
  { path: 'products', component: Products },
  { path: 'cart', component: Cart },
  { path: 'crud', component: Crud },
];
