import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InscriptionComponent } from '../inscription/inscription.component';
import { ConnectComponent } from '../connect/connect.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      ConnectComponent, 
      InscriptionComponent, 
      RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'home';
}
