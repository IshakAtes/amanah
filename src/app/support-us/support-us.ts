import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-support-us',
  standalone: true,
  imports: [NavBar, Footer],
  templateUrl: './support-us.html',
  styleUrl: './support-us.scss',
})
export class SupportUs {

}
