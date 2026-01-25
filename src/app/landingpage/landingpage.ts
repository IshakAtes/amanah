import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { Header } from '../header/header';

@Component({
  selector: 'app-landingpage',
  imports: [NavBar, Header],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class Landingpage {

}
