import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss'
})
export class ConnectComponent {
  title = 'connect';
  email: string = '';
  password: string = '';
}
