import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';

export const routes: Routes = [

  // Page home
  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.Home)
  },

  // Page produits
  {
    path: 'prods',
    loadComponent: () => import('./products/products').then(m => m.Products)
  },

  // route par défaut
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // route 404
  { path: '**', redirectTo: 'home' }
];
