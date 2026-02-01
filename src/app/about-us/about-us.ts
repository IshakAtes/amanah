import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NavBar, Footer],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {

}
