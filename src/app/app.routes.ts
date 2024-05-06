import { Routes } from '@angular/router';
import { HomeComponent } from './menu/home/home.component';
import { ProductsComponent } from './menu/products/products.component';
import { AboutusComponent } from './menu/aboutus/aboutus.component';
import { ContactComponent } from './menu/contact/contact.component';
import { EditempleadoComponent } from './menu/editempleado/editempleado.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'edit/:id', component: EditempleadoComponent },
];
