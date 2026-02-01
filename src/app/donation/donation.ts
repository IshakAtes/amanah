import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [NavBar, Footer],
  templateUrl: './donation.html',
  styleUrl: './donation.scss',
})
export class Donation {

}
