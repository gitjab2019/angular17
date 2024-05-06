import { Routes } from '@angular/router';
import { HomeComponent } from './menu/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    loadComponent: () => import('./menu/products/products.component'),
  },
  {
    path: 'aboutus',
    loadComponent: () => import('./menu/aboutus/aboutus.component'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./menu/contact/contact.component'),
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./menu/editempleado/editempleado.component'),
  },
];
