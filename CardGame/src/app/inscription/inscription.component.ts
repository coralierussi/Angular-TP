import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inscription',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  title = 'inscription';
  text: string = '';
  email: string = '';
  password: string = '';

  inscriptionCheck() {  
    // if (this.email === '' || this.password === '') {
    //   this.text = 'Veuillez remplir tous les champs.';
    // } else {
    //   this.text = 'Inscription réussie.';
    // }
    localStorage.setItem('Pseudo', this.text);
  }
}
