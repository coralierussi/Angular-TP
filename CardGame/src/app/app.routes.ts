import { Routes } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CarteComponent } from './carte/carte.component';
import { GameComponent } from './game/game.component';
import { DeckComponent } from './deck/deck.component';

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
        path: 'accueil',
        component: AccueilComponent
    },
    {
        path: 'carte',
        component: CarteComponent,
    },
    {
        path: 'game',
        component: GameComponent,
    },
    {
        path: 'deck',
        component: DeckComponent,
    },
    {
        path: '',
        component: HomeComponent,
    },
];
