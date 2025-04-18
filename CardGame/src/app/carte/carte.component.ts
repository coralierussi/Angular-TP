import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.scss'
})
export class CarteComponent {
  title = 'carte';

}
