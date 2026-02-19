import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [NavBar, Footer],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint {

}
