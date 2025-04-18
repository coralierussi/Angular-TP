import { Routes } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'connect',
        component: ConnectComponent
    },
    {
        path: 'inscription',
        component: InscriptionComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        redirectTo: '/home',
    }
];
