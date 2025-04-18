import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DeckComponent } from '../deck/deck.component';
import { CarteComponent } from '../carte/carte.component';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink, DeckComponent, CarteComponent, GameComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent implements OnInit {
  title = 'accueil';
  name ='';
  ngOnInit(): void {
    const stockage = localStorage.getItem('Pseudo');
    this.name = stockage ? stockage : '';
    console.log(this.name);
  }
 
}
