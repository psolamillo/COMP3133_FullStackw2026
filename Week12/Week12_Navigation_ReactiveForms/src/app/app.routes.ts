import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { OrderForm } from './order-form/order-form';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    
{path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', title: 'Home', component: Home},
  {path: 'profile', title: 'Profile', component: Profile},
  {path: 'order', title: 'Order Form', component: OrderForm},
  {path: '**', title: 'Page Not Found', component: PageNotFound}
];
